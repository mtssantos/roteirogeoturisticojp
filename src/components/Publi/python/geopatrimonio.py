import os
import json

lista = list()

geopatrimonios = os.listdir("./public/geopatrimonio")

for geopatrimonio in geopatrimonios:
    json_docs = json.dumps({
        "arq": geopatrimonio,
        "arq_link": "geopatrimonio/" + geopatrimonio
    }, ensure_ascii=False).encode('utf8')
    docs_json = json_docs.decode()
    lista.append(docs_json)
    lista.sort()


os.system("echo " + str(lista) + " > " + "./src/components/Publi/json/geopatrimonio.json")








