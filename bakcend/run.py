from flask import Flask
from flask import jsonify
import json
app = Flask(__name__)

listofPath={
    "idMap":1,
    "local":"Map urban",
    "cords":"@-22.7764685,-43.4152719,15z"
}

@app.route("/")
def index():
    with open("bakcend\ListMap.json") as listmap:
        data = json.load(listmap)
    return jsonify(data)

@app.route("/create/<int:id>/<string:local>/<string:cords>",methods=['POST'])
def postPath(id,local,cords):
    with open("bakcend\ListMap.json",'r') as arq:
        file_lines=arq.readlines()
        indexRqanger = len(file_lines)-2
        print(file_lines[len(file_lines)-2])
    for idDetect in file_lines:
        if("id" in idDetect):
            print(idDetect)
            if str(id) in idDetect:
                return "Id já existente no mapa"
    with open("bakcend\ListMap.json",'w') as writer:
        file_lines[indexRqanger]= file_lines[indexRqanger]+",\n{\n     \"id\":\""+str(id)+"\",\n     \"local\":\""+local+"\",\n     \"cords\":\""+cords+"\"   \n}\n "
        for linha in file_lines:
            writer.write(linha)
    return "Escrito com Sucesso!"

if __name__ =='__main__':
    app.run(debug=True)