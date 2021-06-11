import os
import json

lista = list()

geoturismos = os.listdir("./public/geoturismo")

for geoturismo in geoturismos:
    json_docs = json.dumps({
        "arq": geoturismo,
        "arq_link": "geoturismo/" + geoturismo
    }, ensure_ascii=False).encode('utf8')
    docs_json = json_docs.decode()
    lista.append(docs_json)
    lista.sort()


os.system("echo " + str(lista) + " > " + "./src/components/Publi/json/geoturismo.json")








