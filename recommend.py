#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import sys
from sklearn.feature_extraction.text import TfidfVectorizer


# In[2]:


movies = pd.read_csv('./movies.csv', sep='\t', encoding='latin-1', usecols=['movie_id', 'title', 'genres'], engine='python')


# In[ ]:





# In[3]:


movies['genres'] = movies['genres'].str.split('|')
movies['genres'] = movies['genres'].fillna("").astype('str')


# In[4]:



tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(movies['genres'])


# In[5]:


from sklearn.metrics.pairwise import linear_kernel
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)


# In[6]:


titles = movies['title']
indices = pd.Series(movies.index, index=movies['title'])


# In[7]:


def rec(title):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:21]
    movie_indices = [i[0] for i in sim_scores]
    return titles.iloc[movie_indices]


# In[ ]:
print(rec(sys.argv[1]))

# In[ ]:




