/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 8592.0, "series": [{"data": [[0.0, 8.0], [0.1, 698.0], [0.2, 839.0], [0.3, 854.0], [0.4, 864.0], [0.5, 873.0], [0.6, 882.0], [0.7, 888.0], [0.8, 896.0], [0.9, 902.0], [1.0, 905.0], [1.1, 907.0], [1.2, 909.0], [1.3, 911.0], [1.4, 913.0], [1.5, 915.0], [1.6, 916.0], [1.7, 918.0], [1.8, 919.0], [1.9, 920.0], [2.0, 921.0], [2.1, 922.0], [2.2, 924.0], [2.3, 925.0], [2.4, 926.0], [2.5, 927.0], [2.6, 928.0], [2.7, 929.0], [2.8, 930.0], [2.9, 931.0], [3.0, 932.0], [3.1, 933.0], [3.2, 934.0], [3.3, 935.0], [3.4, 936.0], [3.5, 937.0], [3.6, 938.0], [3.7, 939.0], [3.8, 940.0], [3.9, 940.0], [4.0, 941.0], [4.1, 942.0], [4.2, 943.0], [4.3, 944.0], [4.4, 944.0], [4.5, 945.0], [4.6, 946.0], [4.7, 946.0], [4.8, 947.0], [4.9, 948.0], [5.0, 948.0], [5.1, 949.0], [5.2, 950.0], [5.3, 951.0], [5.4, 951.0], [5.5, 952.0], [5.6, 953.0], [5.7, 953.0], [5.8, 954.0], [5.9, 955.0], [6.0, 956.0], [6.1, 956.0], [6.2, 957.0], [6.3, 957.0], [6.4, 958.0], [6.5, 958.0], [6.6, 959.0], [6.7, 959.0], [6.8, 960.0], [6.9, 961.0], [7.0, 961.0], [7.1, 962.0], [7.2, 962.0], [7.3, 963.0], [7.4, 963.0], [7.5, 964.0], [7.6, 964.0], [7.7, 964.0], [7.8, 965.0], [7.9, 966.0], [8.0, 966.0], [8.1, 966.0], [8.2, 967.0], [8.3, 967.0], [8.4, 968.0], [8.5, 968.0], [8.6, 969.0], [8.7, 970.0], [8.8, 970.0], [8.9, 970.0], [9.0, 971.0], [9.1, 971.0], [9.2, 972.0], [9.3, 972.0], [9.4, 972.0], [9.5, 973.0], [9.6, 973.0], [9.7, 974.0], [9.8, 974.0], [9.9, 975.0], [10.0, 975.0], [10.1, 976.0], [10.2, 976.0], [10.3, 976.0], [10.4, 977.0], [10.5, 977.0], [10.6, 978.0], [10.7, 978.0], [10.8, 978.0], [10.9, 979.0], [11.0, 979.0], [11.1, 980.0], [11.2, 980.0], [11.3, 981.0], [11.4, 981.0], [11.5, 981.0], [11.6, 982.0], [11.7, 982.0], [11.8, 982.0], [11.9, 983.0], [12.0, 983.0], [12.1, 983.0], [12.2, 984.0], [12.3, 984.0], [12.4, 984.0], [12.5, 985.0], [12.6, 985.0], [12.7, 985.0], [12.8, 986.0], [12.9, 986.0], [13.0, 986.0], [13.1, 987.0], [13.2, 987.0], [13.3, 987.0], [13.4, 988.0], [13.5, 988.0], [13.6, 988.0], [13.7, 989.0], [13.8, 989.0], [13.9, 989.0], [14.0, 990.0], [14.1, 990.0], [14.2, 990.0], [14.3, 991.0], [14.4, 991.0], [14.5, 991.0], [14.6, 992.0], [14.7, 992.0], [14.8, 992.0], [14.9, 993.0], [15.0, 993.0], [15.1, 993.0], [15.2, 994.0], [15.3, 994.0], [15.4, 994.0], [15.5, 995.0], [15.6, 995.0], [15.7, 995.0], [15.8, 996.0], [15.9, 996.0], [16.0, 996.0], [16.1, 997.0], [16.2, 997.0], [16.3, 997.0], [16.4, 997.0], [16.5, 998.0], [16.6, 998.0], [16.7, 998.0], [16.8, 999.0], [16.9, 999.0], [17.0, 999.0], [17.1, 999.0], [17.2, 1000.0], [17.3, 1000.0], [17.4, 1000.0], [17.5, 1000.0], [17.6, 1001.0], [17.7, 1001.0], [17.8, 1001.0], [17.9, 1002.0], [18.0, 1002.0], [18.1, 1002.0], [18.2, 1002.0], [18.3, 1003.0], [18.4, 1003.0], [18.5, 1003.0], [18.6, 1003.0], [18.7, 1004.0], [18.8, 1004.0], [18.9, 1004.0], [19.0, 1005.0], [19.1, 1005.0], [19.2, 1005.0], [19.3, 1005.0], [19.4, 1006.0], [19.5, 1006.0], [19.6, 1006.0], [19.7, 1007.0], [19.8, 1007.0], [19.9, 1007.0], [20.0, 1007.0], [20.1, 1008.0], [20.2, 1008.0], [20.3, 1008.0], [20.4, 1008.0], [20.5, 1009.0], [20.6, 1009.0], [20.7, 1009.0], [20.8, 1009.0], [20.9, 1010.0], [21.0, 1010.0], [21.1, 1010.0], [21.2, 1010.0], [21.3, 1011.0], [21.4, 1011.0], [21.5, 1011.0], [21.6, 1011.0], [21.7, 1012.0], [21.8, 1012.0], [21.9, 1012.0], [22.0, 1012.0], [22.1, 1013.0], [22.2, 1013.0], [22.3, 1013.0], [22.4, 1013.0], [22.5, 1014.0], [22.6, 1014.0], [22.7, 1014.0], [22.8, 1014.0], [22.9, 1014.0], [23.0, 1015.0], [23.1, 1015.0], [23.2, 1015.0], [23.3, 1016.0], [23.4, 1016.0], [23.5, 1016.0], [23.6, 1016.0], [23.7, 1016.0], [23.8, 1017.0], [23.9, 1017.0], [24.0, 1017.0], [24.1, 1017.0], [24.2, 1018.0], [24.3, 1018.0], [24.4, 1018.0], [24.5, 1018.0], [24.6, 1018.0], [24.7, 1019.0], [24.8, 1019.0], [24.9, 1019.0], [25.0, 1019.0], [25.1, 1020.0], [25.2, 1020.0], [25.3, 1020.0], [25.4, 1020.0], [25.5, 1020.0], [25.6, 1021.0], [25.7, 1021.0], [25.8, 1021.0], [25.9, 1021.0], [26.0, 1022.0], [26.1, 1022.0], [26.2, 1022.0], [26.3, 1022.0], [26.4, 1022.0], [26.5, 1023.0], [26.6, 1023.0], [26.7, 1023.0], [26.8, 1023.0], [26.9, 1023.0], [27.0, 1024.0], [27.1, 1024.0], [27.2, 1024.0], [27.3, 1024.0], [27.4, 1024.0], [27.5, 1025.0], [27.6, 1025.0], [27.7, 1025.0], [27.8, 1025.0], [27.9, 1026.0], [28.0, 1026.0], [28.1, 1026.0], [28.2, 1026.0], [28.3, 1027.0], [28.4, 1027.0], [28.5, 1027.0], [28.6, 1027.0], [28.7, 1027.0], [28.8, 1028.0], [28.9, 1028.0], [29.0, 1028.0], [29.1, 1028.0], [29.2, 1029.0], [29.3, 1029.0], [29.4, 1029.0], [29.5, 1029.0], [29.6, 1029.0], [29.7, 1029.0], [29.8, 1030.0], [29.9, 1030.0], [30.0, 1030.0], [30.1, 1030.0], [30.2, 1030.0], [30.3, 1031.0], [30.4, 1031.0], [30.5, 1031.0], [30.6, 1031.0], [30.7, 1031.0], [30.8, 1031.0], [30.9, 1032.0], [31.0, 1032.0], [31.1, 1032.0], [31.2, 1032.0], [31.3, 1032.0], [31.4, 1033.0], [31.5, 1033.0], [31.6, 1033.0], [31.7, 1033.0], [31.8, 1033.0], [31.9, 1034.0], [32.0, 1034.0], [32.1, 1034.0], [32.2, 1034.0], [32.3, 1034.0], [32.4, 1034.0], [32.5, 1035.0], [32.6, 1035.0], [32.7, 1035.0], [32.8, 1035.0], [32.9, 1035.0], [33.0, 1036.0], [33.1, 1036.0], [33.2, 1036.0], [33.3, 1036.0], [33.4, 1036.0], [33.5, 1037.0], [33.6, 1037.0], [33.7, 1037.0], [33.8, 1037.0], [33.9, 1037.0], [34.0, 1037.0], [34.1, 1038.0], [34.2, 1038.0], [34.3, 1038.0], [34.4, 1038.0], [34.5, 1038.0], [34.6, 1039.0], [34.7, 1039.0], [34.8, 1039.0], [34.9, 1039.0], [35.0, 1039.0], [35.1, 1039.0], [35.2, 1039.0], [35.3, 1040.0], [35.4, 1040.0], [35.5, 1040.0], [35.6, 1040.0], [35.7, 1040.0], [35.8, 1040.0], [35.9, 1041.0], [36.0, 1041.0], [36.1, 1041.0], [36.2, 1041.0], [36.3, 1041.0], [36.4, 1042.0], [36.5, 1042.0], [36.6, 1042.0], [36.7, 1042.0], [36.8, 1042.0], [36.9, 1042.0], [37.0, 1042.0], [37.1, 1043.0], [37.2, 1043.0], [37.3, 1043.0], [37.4, 1043.0], [37.5, 1043.0], [37.6, 1043.0], [37.7, 1044.0], [37.8, 1044.0], [37.9, 1044.0], [38.0, 1044.0], [38.1, 1044.0], [38.2, 1044.0], [38.3, 1045.0], [38.4, 1045.0], [38.5, 1045.0], [38.6, 1045.0], [38.7, 1046.0], [38.8, 1046.0], [38.9, 1046.0], [39.0, 1046.0], [39.1, 1046.0], [39.2, 1046.0], [39.3, 1046.0], [39.4, 1046.0], [39.5, 1047.0], [39.6, 1047.0], [39.7, 1047.0], [39.8, 1047.0], [39.9, 1047.0], [40.0, 1047.0], [40.1, 1048.0], [40.2, 1048.0], [40.3, 1048.0], [40.4, 1048.0], [40.5, 1048.0], [40.6, 1049.0], [40.7, 1049.0], [40.8, 1049.0], [40.9, 1049.0], [41.0, 1049.0], [41.1, 1049.0], [41.2, 1050.0], [41.3, 1050.0], [41.4, 1050.0], [41.5, 1050.0], [41.6, 1050.0], [41.7, 1050.0], [41.8, 1051.0], [41.9, 1051.0], [42.0, 1051.0], [42.1, 1051.0], [42.2, 1051.0], [42.3, 1052.0], [42.4, 1052.0], [42.5, 1052.0], [42.6, 1052.0], [42.7, 1052.0], [42.8, 1052.0], [42.9, 1053.0], [43.0, 1053.0], [43.1, 1053.0], [43.2, 1053.0], [43.3, 1053.0], [43.4, 1053.0], [43.5, 1054.0], [43.6, 1054.0], [43.7, 1054.0], [43.8, 1054.0], [43.9, 1054.0], [44.0, 1054.0], [44.1, 1054.0], [44.2, 1055.0], [44.3, 1055.0], [44.4, 1055.0], [44.5, 1055.0], [44.6, 1055.0], [44.7, 1056.0], [44.8, 1056.0], [44.9, 1056.0], [45.0, 1056.0], [45.1, 1056.0], [45.2, 1056.0], [45.3, 1057.0], [45.4, 1057.0], [45.5, 1057.0], [45.6, 1057.0], [45.7, 1057.0], [45.8, 1057.0], [45.9, 1058.0], [46.0, 1058.0], [46.1, 1058.0], [46.2, 1058.0], [46.3, 1058.0], [46.4, 1058.0], [46.5, 1059.0], [46.6, 1059.0], [46.7, 1059.0], [46.8, 1059.0], [46.9, 1059.0], [47.0, 1059.0], [47.1, 1059.0], [47.2, 1060.0], [47.3, 1060.0], [47.4, 1060.0], [47.5, 1060.0], [47.6, 1060.0], [47.7, 1060.0], [47.8, 1061.0], [47.9, 1061.0], [48.0, 1061.0], [48.1, 1061.0], [48.2, 1061.0], [48.3, 1062.0], [48.4, 1062.0], [48.5, 1062.0], [48.6, 1062.0], [48.7, 1062.0], [48.8, 1062.0], [48.9, 1063.0], [49.0, 1063.0], [49.1, 1063.0], [49.2, 1063.0], [49.3, 1063.0], [49.4, 1063.0], [49.5, 1064.0], [49.6, 1064.0], [49.7, 1064.0], [49.8, 1064.0], [49.9, 1064.0], [50.0, 1064.0], [50.1, 1064.0], [50.2, 1064.0], [50.3, 1065.0], [50.4, 1065.0], [50.5, 1065.0], [50.6, 1065.0], [50.7, 1065.0], [50.8, 1065.0], [50.9, 1065.0], [51.0, 1065.0], [51.1, 1066.0], [51.2, 1066.0], [51.3, 1066.0], [51.4, 1066.0], [51.5, 1066.0], [51.6, 1066.0], [51.7, 1067.0], [51.8, 1067.0], [51.9, 1067.0], [52.0, 1067.0], [52.1, 1067.0], [52.2, 1067.0], [52.3, 1068.0], [52.4, 1068.0], [52.5, 1068.0], [52.6, 1068.0], [52.7, 1068.0], [52.8, 1068.0], [52.9, 1068.0], [53.0, 1069.0], [53.1, 1069.0], [53.2, 1069.0], [53.3, 1069.0], [53.4, 1069.0], [53.5, 1069.0], [53.6, 1070.0], [53.7, 1070.0], [53.8, 1070.0], [53.9, 1070.0], [54.0, 1070.0], [54.1, 1070.0], [54.2, 1071.0], [54.3, 1071.0], [54.4, 1071.0], [54.5, 1071.0], [54.6, 1071.0], [54.7, 1071.0], [54.8, 1072.0], [54.9, 1072.0], [55.0, 1072.0], [55.1, 1072.0], [55.2, 1072.0], [55.3, 1072.0], [55.4, 1073.0], [55.5, 1073.0], [55.6, 1073.0], [55.7, 1073.0], [55.8, 1073.0], [55.9, 1073.0], [56.0, 1073.0], [56.1, 1074.0], [56.2, 1074.0], [56.3, 1074.0], [56.4, 1074.0], [56.5, 1074.0], [56.6, 1075.0], [56.7, 1075.0], [56.8, 1075.0], [56.9, 1075.0], [57.0, 1075.0], [57.1, 1075.0], [57.2, 1076.0], [57.3, 1076.0], [57.4, 1076.0], [57.5, 1076.0], [57.6, 1076.0], [57.7, 1076.0], [57.8, 1077.0], [57.9, 1077.0], [58.0, 1077.0], [58.1, 1077.0], [58.2, 1077.0], [58.3, 1077.0], [58.4, 1077.0], [58.5, 1077.0], [58.6, 1078.0], [58.7, 1078.0], [58.8, 1078.0], [58.9, 1078.0], [59.0, 1078.0], [59.1, 1079.0], [59.2, 1079.0], [59.3, 1079.0], [59.4, 1079.0], [59.5, 1079.0], [59.6, 1079.0], [59.7, 1080.0], [59.8, 1080.0], [59.9, 1080.0], [60.0, 1080.0], [60.1, 1080.0], [60.2, 1080.0], [60.3, 1081.0], [60.4, 1081.0], [60.5, 1081.0], [60.6, 1081.0], [60.7, 1081.0], [60.8, 1081.0], [60.9, 1081.0], [61.0, 1082.0], [61.1, 1082.0], [61.2, 1082.0], [61.3, 1082.0], [61.4, 1082.0], [61.5, 1082.0], [61.6, 1083.0], [61.7, 1083.0], [61.8, 1083.0], [61.9, 1083.0], [62.0, 1083.0], [62.1, 1083.0], [62.2, 1084.0], [62.3, 1084.0], [62.4, 1084.0], [62.5, 1084.0], [62.6, 1084.0], [62.7, 1085.0], [62.8, 1085.0], [62.9, 1085.0], [63.0, 1085.0], [63.1, 1085.0], [63.2, 1085.0], [63.3, 1085.0], [63.4, 1086.0], [63.5, 1086.0], [63.6, 1086.0], [63.7, 1086.0], [63.8, 1086.0], [63.9, 1087.0], [64.0, 1087.0], [64.1, 1087.0], [64.2, 1087.0], [64.3, 1087.0], [64.4, 1088.0], [64.5, 1088.0], [64.6, 1088.0], [64.7, 1088.0], [64.8, 1088.0], [64.9, 1088.0], [65.0, 1089.0], [65.1, 1089.0], [65.2, 1089.0], [65.3, 1089.0], [65.4, 1089.0], [65.5, 1089.0], [65.6, 1090.0], [65.7, 1090.0], [65.8, 1090.0], [65.9, 1090.0], [66.0, 1090.0], [66.1, 1090.0], [66.2, 1091.0], [66.3, 1091.0], [66.4, 1091.0], [66.5, 1091.0], [66.6, 1091.0], [66.7, 1091.0], [66.8, 1092.0], [66.9, 1092.0], [67.0, 1092.0], [67.1, 1092.0], [67.2, 1092.0], [67.3, 1092.0], [67.4, 1093.0], [67.5, 1093.0], [67.6, 1093.0], [67.7, 1093.0], [67.8, 1093.0], [67.9, 1094.0], [68.0, 1094.0], [68.1, 1094.0], [68.2, 1094.0], [68.3, 1094.0], [68.4, 1094.0], [68.5, 1095.0], [68.6, 1095.0], [68.7, 1095.0], [68.8, 1095.0], [68.9, 1095.0], [69.0, 1095.0], [69.1, 1096.0], [69.2, 1096.0], [69.3, 1096.0], [69.4, 1096.0], [69.5, 1096.0], [69.6, 1097.0], [69.7, 1097.0], [69.8, 1097.0], [69.9, 1097.0], [70.0, 1097.0], [70.1, 1097.0], [70.2, 1098.0], [70.3, 1098.0], [70.4, 1098.0], [70.5, 1098.0], [70.6, 1098.0], [70.7, 1099.0], [70.8, 1099.0], [70.9, 1099.0], [71.0, 1099.0], [71.1, 1099.0], [71.2, 1099.0], [71.3, 1100.0], [71.4, 1100.0], [71.5, 1100.0], [71.6, 1100.0], [71.7, 1100.0], [71.8, 1100.0], [71.9, 1101.0], [72.0, 1101.0], [72.1, 1101.0], [72.2, 1101.0], [72.3, 1101.0], [72.4, 1101.0], [72.5, 1102.0], [72.6, 1102.0], [72.7, 1102.0], [72.8, 1102.0], [72.9, 1102.0], [73.0, 1103.0], [73.1, 1103.0], [73.2, 1103.0], [73.3, 1103.0], [73.4, 1103.0], [73.5, 1103.0], [73.6, 1104.0], [73.7, 1104.0], [73.8, 1104.0], [73.9, 1104.0], [74.0, 1105.0], [74.1, 1105.0], [74.2, 1105.0], [74.3, 1105.0], [74.4, 1105.0], [74.5, 1106.0], [74.6, 1106.0], [74.7, 1106.0], [74.8, 1106.0], [74.9, 1107.0], [75.0, 1107.0], [75.1, 1107.0], [75.2, 1107.0], [75.3, 1107.0], [75.4, 1107.0], [75.5, 1108.0], [75.6, 1108.0], [75.7, 1108.0], [75.8, 1108.0], [75.9, 1109.0], [76.0, 1109.0], [76.1, 1109.0], [76.2, 1109.0], [76.3, 1109.0], [76.4, 1110.0], [76.5, 1110.0], [76.6, 1110.0], [76.7, 1110.0], [76.8, 1110.0], [76.9, 1111.0], [77.0, 1111.0], [77.1, 1111.0], [77.2, 1111.0], [77.3, 1112.0], [77.4, 1112.0], [77.5, 1112.0], [77.6, 1112.0], [77.7, 1112.0], [77.8, 1113.0], [77.9, 1113.0], [78.0, 1113.0], [78.1, 1113.0], [78.2, 1114.0], [78.3, 1114.0], [78.4, 1114.0], [78.5, 1114.0], [78.6, 1114.0], [78.7, 1115.0], [78.8, 1115.0], [78.9, 1115.0], [79.0, 1115.0], [79.1, 1116.0], [79.2, 1116.0], [79.3, 1116.0], [79.4, 1116.0], [79.5, 1117.0], [79.6, 1117.0], [79.7, 1117.0], [79.8, 1117.0], [79.9, 1118.0], [80.0, 1118.0], [80.1, 1118.0], [80.2, 1118.0], [80.3, 1119.0], [80.4, 1119.0], [80.5, 1119.0], [80.6, 1119.0], [80.7, 1120.0], [80.8, 1120.0], [80.9, 1120.0], [81.0, 1121.0], [81.1, 1121.0], [81.2, 1121.0], [81.3, 1121.0], [81.4, 1122.0], [81.5, 1122.0], [81.6, 1122.0], [81.7, 1122.0], [81.8, 1122.0], [81.9, 1123.0], [82.0, 1123.0], [82.1, 1123.0], [82.2, 1124.0], [82.3, 1124.0], [82.4, 1124.0], [82.5, 1125.0], [82.6, 1125.0], [82.7, 1125.0], [82.8, 1126.0], [82.9, 1126.0], [83.0, 1126.0], [83.1, 1127.0], [83.2, 1127.0], [83.3, 1127.0], [83.4, 1127.0], [83.5, 1128.0], [83.6, 1128.0], [83.7, 1129.0], [83.8, 1129.0], [83.9, 1129.0], [84.0, 1129.0], [84.1, 1130.0], [84.2, 1130.0], [84.3, 1130.0], [84.4, 1131.0], [84.5, 1131.0], [84.6, 1131.0], [84.7, 1132.0], [84.8, 1132.0], [84.9, 1132.0], [85.0, 1133.0], [85.1, 1133.0], [85.2, 1133.0], [85.3, 1134.0], [85.4, 1134.0], [85.5, 1135.0], [85.6, 1135.0], [85.7, 1135.0], [85.8, 1136.0], [85.9, 1136.0], [86.0, 1136.0], [86.1, 1137.0], [86.2, 1137.0], [86.3, 1138.0], [86.4, 1138.0], [86.5, 1139.0], [86.6, 1139.0], [86.7, 1140.0], [86.8, 1140.0], [86.9, 1140.0], [87.0, 1141.0], [87.1, 1141.0], [87.2, 1142.0], [87.3, 1142.0], [87.4, 1142.0], [87.5, 1143.0], [87.6, 1143.0], [87.7, 1144.0], [87.8, 1144.0], [87.9, 1144.0], [88.0, 1145.0], [88.1, 1145.0], [88.2, 1146.0], [88.3, 1146.0], [88.4, 1146.0], [88.5, 1147.0], [88.6, 1147.0], [88.7, 1147.0], [88.8, 1148.0], [88.9, 1148.0], [89.0, 1149.0], [89.1, 1149.0], [89.2, 1149.0], [89.3, 1150.0], [89.4, 1150.0], [89.5, 1151.0], [89.6, 1152.0], [89.7, 1152.0], [89.8, 1152.0], [89.9, 1153.0], [90.0, 1153.0], [90.1, 1154.0], [90.2, 1154.0], [90.3, 1155.0], [90.4, 1155.0], [90.5, 1155.0], [90.6, 1156.0], [90.7, 1156.0], [90.8, 1157.0], [90.9, 1157.0], [91.0, 1158.0], [91.1, 1158.0], [91.2, 1158.0], [91.3, 1159.0], [91.4, 1159.0], [91.5, 1160.0], [91.6, 1160.0], [91.7, 1161.0], [91.8, 1161.0], [91.9, 1162.0], [92.0, 1162.0], [92.1, 1163.0], [92.2, 1164.0], [92.3, 1164.0], [92.4, 1165.0], [92.5, 1165.0], [92.6, 1166.0], [92.7, 1167.0], [92.8, 1168.0], [92.9, 1168.0], [93.0, 1169.0], [93.1, 1169.0], [93.2, 1170.0], [93.3, 1171.0], [93.4, 1172.0], [93.5, 1172.0], [93.6, 1173.0], [93.7, 1174.0], [93.8, 1174.0], [93.9, 1175.0], [94.0, 1176.0], [94.1, 1177.0], [94.2, 1178.0], [94.3, 1179.0], [94.4, 1180.0], [94.5, 1181.0], [94.6, 1182.0], [94.7, 1183.0], [94.8, 1184.0], [94.9, 1185.0], [95.0, 1186.0], [95.1, 1187.0], [95.2, 1189.0], [95.3, 1190.0], [95.4, 1192.0], [95.5, 1193.0], [95.6, 1195.0], [95.7, 1196.0], [95.8, 1198.0], [95.9, 1200.0], [96.0, 1202.0], [96.1, 1204.0], [96.2, 1206.0], [96.3, 1207.0], [96.4, 1210.0], [96.5, 1212.0], [96.6, 1215.0], [96.7, 1217.0], [96.8, 1221.0], [96.9, 1225.0], [97.0, 1231.0], [97.1, 1238.0], [97.2, 1246.0], [97.3, 1253.0], [97.4, 1271.0], [97.5, 1294.0], [97.6, 1302.0], [97.7, 1315.0], [97.8, 1370.0], [97.9, 1469.0], [98.0, 1522.0], [98.1, 1543.0], [98.2, 1586.0], [98.3, 1676.0], [98.4, 2065.0], [98.5, 2598.0], [98.6, 3021.0], [98.7, 3572.0], [98.8, 3742.0], [98.9, 4281.0], [99.0, 4754.0], [99.1, 4905.0], [99.2, 5197.0], [99.3, 5683.0], [99.4, 6439.0], [99.5, 6907.0], [99.6, 7436.0], [99.7, 7642.0], [99.8, 7905.0], [99.9, 8149.0], [100.0, 8592.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 19293.0, "series": [{"data": [[0.0, 21.0], [8500.0, 2.0], [2500.0, 29.0], [3000.0, 20.0], [3500.0, 42.0], [1000.0, 19293.0], [4000.0, 21.0], [4500.0, 49.0], [5000.0, 27.0], [5500.0, 15.0], [1500.0, 104.0], [6000.0, 20.0], [6500.0, 23.0], [7000.0, 30.0], [7500.0, 47.0], [500.0, 4083.0], [2000.0, 21.0], [8000.0, 39.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 500, "maxX": 8500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23376.0, "series": [{"data": [[0.0, 21.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23376.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 489.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 22.123711340206174, "minX": 1.59271851E12, "maxY": 100.0, "series": [{"data": [[1.59271857E12, 99.49874955341205], [1.59271872E12, 100.0], [1.59271875E12, 100.0], [1.5927186E12, 100.0], [1.59271863E12, 100.0], [1.59271878E12, 100.0], [1.59271881E12, 90.46050096339113], [1.59271851E12, 22.123711340206174], [1.59271866E12, 100.0], [1.59271869E12, 100.0], [1.59271854E12, 81.30461538461537]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59271881E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 348.3333333333333, "minX": 1.0, "maxY": 7277.137931034483, "series": [{"data": [[2.0, 348.3333333333333], [3.0, 488.4], [4.0, 526.0], [5.0, 554.8333333333334], [6.0, 775.1666666666666], [7.0, 929.5], [8.0, 984.5], [9.0, 1048.6], [10.0, 1112.0], [11.0, 1224.8333333333333], [12.0, 1335.4], [13.0, 1403.4], [14.0, 1507.5], [15.0, 1581.2], [16.0, 1613.2857142857142], [17.0, 1609.8333333333333], [18.0, 1624.5], [19.0, 1803.0], [20.0, 1891.4], [21.0, 2062.166666666667], [22.0, 2172.8], [23.0, 2286.1666666666665], [24.0, 2352.3333333333335], [25.0, 2420.8], [26.0, 2505.8333333333335], [27.0, 2520.4], [28.0, 2659.666666666667], [29.0, 2728.6], [30.0, 2860.833333333333], [31.0, 2865.8], [32.0, 3039.4], [33.0, 3249.857142857143], [34.0, 3226.166666666667], [35.0, 3308.7142857142853], [36.0, 3175.2], [37.0, 3271.8], [38.0, 3360.0], [39.0, 3597.0], [40.0, 3525.2], [41.0, 3695.6], [42.0, 3930.1666666666665], [43.0, 4017.0], [44.0, 4102.833333333333], [45.0, 4185.333333333334], [46.0, 4104.0], [47.0, 4347.625], [48.0, 4155.6], [49.0, 4409.571428571428], [50.0, 4316.5], [51.0, 4308.0], [52.0, 4395.4], [53.0, 4761.428571428572], [54.0, 4576.0], [55.0, 4845.333333333333], [56.0, 4959.333333333334], [57.0, 4967.4], [58.0, 5136.4], [59.0, 5236.4], [60.0, 6407.0], [61.0, 4802.666666666667], [62.0, 5750.666666666667], [63.0, 5833.833333333334], [64.0, 5719.8], [65.0, 5901.2], [66.0, 6069.8], [67.0, 6344.833333333334], [68.0, 6543.142857142857], [69.0, 6388.333333333334], [70.0, 6233.6], [71.0, 6511.5], [72.0, 6638.571428571428], [73.0, 6339.4], [74.0, 6474.2], [75.0, 6835.166666666667], [76.0, 6730.8], [77.0, 7159.428571428571], [78.0, 7045.857142857142], [79.0, 6927.714285714286], [80.0, 6881.857142857143], [81.0, 6734.0], [82.0, 6746.4], [83.0, 6888.4], [84.0, 7221.5], [85.0, 7277.137931034483], [86.0, 3612.2666666666664], [87.0, 896.8070175438597], [88.0, 897.6481481481483], [89.0, 966.4464285714287], [90.0, 909.3731343283579], [91.0, 874.7735849056605], [92.0, 1011.245283018868], [93.0, 1036.8500000000004], [94.0, 947.6666666666667], [95.0, 946.701754385965], [96.0, 1035.6326530612246], [97.0, 1037.9523809523807], [98.0, 990.5901639344263], [99.0, 1033.3584905660377], [100.0, 1065.9285018162461], [1.0, 400.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.59273214435282, 1134.1110273800625]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 788.9333333333333, "minX": 1.59271851E12, "maxY": 224348.5, "series": [{"data": [[1.59271857E12, 217549.73333333334], [1.59271872E12, 224348.5], [1.59271875E12, 221266.7], [1.5927186E12, 221326.4], [1.59271863E12, 216122.6], [1.59271878E12, 209562.16666666666], [1.59271881E12, 40361.933333333334], [1.59271851E12, 15086.366666666667], [1.59271866E12, 219209.53333333333], [1.59271869E12, 221484.83333333334], [1.59271854E12, 50539.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59271857E12, 11382.6], [1.59271872E12, 11736.4], [1.59271875E12, 11573.733333333334], [1.5927186E12, 11577.8], [1.59271863E12, 11305.333333333334], [1.59271878E12, 10963.733333333334], [1.59271881E12, 2110.6], [1.59271851E12, 788.9333333333333], [1.59271866E12, 11468.0], [1.59271869E12, 11585.933333333332], [1.59271854E12, 2643.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59271881E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1038.3361053361043, "minX": 1.59271851E12, "maxY": 3217.001538461539, "series": [{"data": [[1.59271857E12, 1064.833511968559], [1.59271872E12, 1038.3361053361043], [1.59271875E12, 1052.9114546732283], [1.5927186E12, 1054.7681770284498], [1.59271863E12, 1077.0482014388533], [1.59271878E12, 1112.9892433234406], [1.59271881E12, 1090.3622350674361], [1.59271851E12, 2358.17525773196], [1.59271866E12, 1065.0751773049665], [1.59271869E12, 1053.0003510003512], [1.59271854E12, 3217.001538461539]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59271881E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1038.3343728343725, "minX": 1.59271851E12, "maxY": 3216.9800000000023, "series": [{"data": [[1.59271857E12, 1064.8249374776683], [1.59271872E12, 1038.3343728343725], [1.59271875E12, 1052.909697821502], [1.5927186E12, 1054.7622058306983], [1.59271863E12, 1077.0435251798515], [1.59271878E12, 1112.9877596439128], [1.59271881E12, 1090.3603082851635], [1.59271851E12, 2358.123711340206], [1.59271866E12, 1065.0737588652496], [1.59271869E12, 1052.9961389961418], [1.59271854E12, 3216.9800000000023]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59271881E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.002457002457002458, "minX": 1.59271851E12, "maxY": 0.14432989690721654, "series": [{"data": [[1.59271857E12, 0.003929974991068237], [1.59271872E12, 0.0031185031185031213], [1.59271875E12, 0.002810962754743507], [1.5927186E12, 0.0042149631190727035], [1.59271863E12, 0.0053956834532374294], [1.59271878E12, 0.003709198813056387], [1.59271881E12, 0.003853564547206168], [1.59271851E12, 0.14432989690721654], [1.59271866E12, 0.004255319148936179], [1.59271869E12, 0.002457002457002458], [1.59271854E12, 0.01384615384615385]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59271881E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.59271851E12, "maxY": 8592.0, "series": [{"data": [[1.59271857E12, 1201.0], [1.59271872E12, 1183.0], [1.59271875E12, 1174.0], [1.5927186E12, 1227.0], [1.59271863E12, 1235.0], [1.59271878E12, 1611.0], [1.59271881E12, 1204.0], [1.59271851E12, 4568.0], [1.59271866E12, 1256.0], [1.59271869E12, 1211.0], [1.59271854E12, 8592.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59271857E12, 924.399998664856], [1.59271872E12, 913.9829993116856], [1.59271875E12, 947.0], [1.5927186E12, 897.6319993209839], [1.59271863E12, 931.0], [1.59271878E12, 944.0], [1.59271881E12, 1003.7199995040894], [1.59271851E12, 100.10999432802201], [1.59271866E12, 944.0], [1.59271869E12, 909.0], [1.59271854E12, 824.8589998447895]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59271857E12, 926.7200002670288], [1.59271872E12, 914.5813002753258], [1.59271875E12, 948.0], [1.5927186E12, 901.1952002716065], [1.59271863E12, 931.0], [1.59271878E12, 945.0], [1.59271881E12, 1005.148000049591], [1.59271851E12, 121.52100226879121], [1.59271866E12, 944.9279002690315], [1.59271869E12, 909.2150002717972], [1.59271854E12, 825.4449000620842]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59271857E12, 926.0], [1.59271872E12, 914.0], [1.59271875E12, 948.0], [1.5927186E12, 899.1119993209838], [1.59271863E12, 931.0], [1.59271878E12, 944.6214996784926], [1.59271881E12, 1004.7599997520447], [1.59271851E12, 112.00499716401097], [1.59271866E12, 944.0], [1.59271869E12, 909.0], [1.59271854E12, 825.1844999223947]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59271857E12, 893.0], [1.59271872E12, 886.0], [1.59271875E12, 933.0], [1.5927186E12, 854.0], [1.59271863E12, 916.0], [1.59271878E12, 929.0], [1.59271881E12, 998.0], [1.59271851E12, 8.0], [1.59271866E12, 911.0], [1.59271869E12, 883.0], [1.59271854E12, 819.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59271857E12, 1067.0], [1.59271872E12, 1039.0], [1.59271875E12, 1057.0], [1.5927186E12, 1059.0], [1.59271863E12, 1081.0], [1.59271878E12, 1096.0], [1.59271881E12, 1087.0], [1.59271851E12, 2438.5], [1.59271866E12, 1063.0], [1.59271869E12, 1056.0], [1.59271854E12, 1040.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59271881E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 8140.0, "series": [{"data": [[52.0, 1218.0], [62.0, 1125.5], [76.0, 1613.5], [77.0, 1542.0], [81.0, 1198.0], [83.0, 1091.5], [82.0, 1164.5], [85.0, 1168.0], [87.0, 1096.0], [84.0, 1129.0], [86.0, 1106.0], [89.0, 1098.0], [88.0, 1072.0], [91.0, 1081.0], [90.0, 1099.0], [92.0, 1078.0], [94.0, 1073.0], [93.0, 1068.0], [95.0, 1062.0], [6.0, 3872.0], [96.0, 1047.0], [97.0, 1046.0], [99.0, 1024.0], [98.0, 1035.0], [102.0, 1012.0], [103.0, 1026.0], [101.0, 1056.0], [100.0, 1018.0], [105.0, 1018.0], [106.0, 991.5], [104.0, 961.0], [109.0, 954.0], [7.0, 5439.0], [112.0, 924.5], [8.0, 3670.0], [9.0, 4930.0], [10.0, 7440.0], [11.0, 8140.0], [1.0, 368.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 366.0, "minX": 1.0, "maxY": 8140.0, "series": [{"data": [[52.0, 1218.0], [62.0, 1125.5], [76.0, 1613.5], [77.0, 1542.0], [81.0, 1198.0], [83.0, 1091.5], [82.0, 1164.5], [85.0, 1168.0], [87.0, 1096.0], [84.0, 1129.0], [86.0, 1106.0], [89.0, 1098.0], [88.0, 1072.0], [91.0, 1081.0], [90.0, 1099.0], [92.0, 1078.0], [94.0, 1073.0], [93.0, 1068.0], [95.0, 1062.0], [6.0, 3872.0], [96.0, 1047.0], [97.0, 1046.0], [99.0, 1024.0], [98.0, 1035.0], [102.0, 1012.0], [103.0, 1026.0], [101.0, 1056.0], [100.0, 1018.0], [105.0, 1018.0], [106.0, 991.5], [104.0, 961.0], [109.0, 954.0], [7.0, 5439.0], [112.0, 924.5], [8.0, 3670.0], [9.0, 4930.0], [10.0, 7440.0], [11.0, 8140.0], [1.0, 366.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.133333333333333, "minX": 1.59271851E12, "maxY": 96.43333333333334, "series": [{"data": [[1.59271857E12, 94.83333333333333], [1.59271872E12, 96.43333333333334], [1.59271875E12, 93.6], [1.5927186E12, 94.73333333333333], [1.59271863E12, 93.06666666666666], [1.59271878E12, 90.8], [1.59271881E12, 11.266666666666667], [1.59271851E12, 8.133333333333333], [1.59271866E12, 94.1], [1.59271869E12, 94.66666666666667], [1.59271854E12, 24.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59271881E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.59271851E12, "maxY": 96.2, "series": [{"data": [[1.59271857E12, 93.3], [1.59271872E12, 96.2], [1.59271875E12, 94.86666666666666], [1.5927186E12, 94.9], [1.59271863E12, 92.66666666666667], [1.59271878E12, 89.86666666666666], [1.59271881E12, 17.3], [1.59271851E12, 6.466666666666667], [1.59271866E12, 94.0], [1.59271869E12, 94.96666666666667], [1.59271854E12, 21.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59271881E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.59271851E12, "maxY": 96.2, "series": [{"data": [[1.59271857E12, 93.3], [1.59271872E12, 96.2], [1.59271875E12, 94.86666666666666], [1.5927186E12, 94.9], [1.59271863E12, 92.66666666666667], [1.59271878E12, 89.86666666666666], [1.59271881E12, 17.3], [1.59271851E12, 6.466666666666667], [1.59271866E12, 94.0], [1.59271869E12, 94.96666666666667], [1.59271854E12, 21.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59271881E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.59271851E12, "maxY": 96.2, "series": [{"data": [[1.59271857E12, 93.3], [1.59271872E12, 96.2], [1.59271875E12, 94.86666666666666], [1.5927186E12, 94.9], [1.59271863E12, 92.66666666666667], [1.59271878E12, 89.86666666666666], [1.59271881E12, 17.3], [1.59271851E12, 6.466666666666667], [1.59271866E12, 94.0], [1.59271869E12, 94.96666666666667], [1.59271854E12, 21.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59271881E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

