import os
import json

lista = list()

geodiversidades = os.listdir("./public/geodiversidade")

for geodiversidade in geodiversidades:
    json_docs = json.dumps({
        "arq": geodiversidade,
        "arq_link": "geodiversidade/" + geodiversidade
    }, ensure_ascii=False).encode('utf8')
    docs_json = json_docs.decode()
    lista.append(docs_json)
    lista.sort()


os.system("echo " + str(lista) + " > " + "./src/components/Publi/json/geodiversidade.json")








