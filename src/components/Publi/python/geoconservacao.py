import os
import json

lista = list()

geoconservacaos = os.listdir("./public/geoconservacao")

for geoconservacao in geoconservacaos:
    json_docs = json.dumps({
        "arq": geoconservacao,
        "arq_link": "geoconservacao/" + geoconservacao
    }, ensure_ascii=False).encode('utf8')
    docs_json = json_docs.decode()
    lista.append(docs_json)
    lista.sort()


os.system("echo " + str(lista) + " > " + "./src/components/Publi/json/geoconservacao.json")








