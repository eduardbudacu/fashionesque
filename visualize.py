import pandas as pd

data = pd.read_json('data/otrium.json')

data = data[data['stock_amount'].lt(10000)].reset_index()

data['collections'] = data['collections'].apply(lambda x: x if isinstance(x, list) else [])
data['collectionsCount'] = data['collections'].apply(lambda x: len(x))
data['gendersCount'] = data['genders'].apply(lambda x: len(x))
data['category'] = data['categories'].apply(lambda x: sorted(x,key=lambda d: d['ancestorCount'])[-1]['name'])

from IPython.core.display import display, HTML

import plotly.express as px

fig = px.scatter(data, x="price", y="stock_amount",color='category', hover_data=['name'])

fig.update_traces(marker=dict(opacity=0.8), selector=dict(mode='markers'))

#display(HTML(fig.to_html()))

fig.write_html("output.html")
#hide_input
#display(HTML(fig.to_html()))
#fig.show()
