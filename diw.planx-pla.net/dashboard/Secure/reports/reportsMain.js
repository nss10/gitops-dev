import './reportsTable.js';
import { amap, fetchRecentData } from './dataHelper.js';

export function main() {
    var tableJSON = [
      {
        "metadata": {
          "name": "hatchery-diw-40uchicago-2eedu",
          "namespace": "jupyter-pods-qa-covid19",
          "selfLink": "/apis/metrics.k8s.io/v1beta1/namespaces/jupyter-pods-qa-covid19/pods/hatchery-diw-40uchicago-2eedu",
          "creationTimestamp": "2020-10-14T10:41:16Z"
        },
        "timestamp": "2020-10-14T10:40:46Z",
        "window": "30s",
        "containers": [
          {
            "name": "hatchery-container",
            "usage": {
              "cpu": "206629n",
              "memory": "6592Ki"
            }
          },
          {
            "name": "fuse-container",
            "usage": {
              "cpu": "23761114n",
              "memory": "19556Ki"
            }
          }
        ]
      },
     {
        "metadata": {
          "name": "hatchery-planxdemo-40gmail-2ecom",
          "namespace": "jupyter-pods-qa-covid19",
          "selfLink": "/apis/metrics.k8s.io/v1beta1/namespaces/jupyter-pods-qa-covid19/pods/hatchery-planxdemo-40gmail-2ecom",
          "creationTimestamp": "2020-10-14T10:41:16Z"
        },
        "timestamp": "2020-10-14T10:40:37Z",
        "window": "30s",
        "containers": [
          {
            "name": "fuse-container",
            "usage": {
              "cpu": "23450570n",
              "memory": "5764Ki"
            }
          },
          {
            "name": "hatchery-container",
            "usage": {
              "cpu": "206874n",
              "memory": "9448Ki"
            }
          }
        ]
      }
    ];

    var tableDiv = document.createElement("table");
    var trElement =  document.createElement("tr");
    tableDiv.appendChild( trElement );

    var prDiv = document.getElementById("workspace-reports");
    var thElement =  document.createElement("th");
    thElement.innerHTML = "<th> Name </th>";
    thElement.innerHTML += "<th> CreationTime </th>";
    thElement.innerHTML += "<th> fuse-containerCPU </th>";
    thElement.innerHTML += "<th> fuse-containerMemory </th>";
    thElement.innerHTML += "<th> hatchery-containerCpu </th>";
    thElement.innerHTML += "<th> hatchery-containerMemory </th>";
    trElement.appendChild( thElement );

    tableJSON.forEach(function(a_column, index){
      if(a_column.Values){
      var allRows = tableDiv.childNodes;

      for(var i=0 ;i< a_column.Values.length; i++)
      {
      var rowWanted = allRows[i+1];
      if( !rowWanted )
      {
        rowWanted = document.createElement("tr");
        tableDiv.appendChild( rowWanted );
      }
      if(rowWanted.childNodes.length==0)
        for(var j=0; j< tableJSON.length; j++){
        rowWanted.appendChild( document.createElement("td") );
        }

      rowWanted.childNodes[ index ].innerHTML = a_column.Values[i];
      }
    }
    });
    prDiv.appendChild(tableDiv);

}



main();