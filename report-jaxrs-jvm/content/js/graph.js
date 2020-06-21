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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1647.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 11.0], [6.0, 11.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 12.0], [6.7, 12.0], [6.8, 12.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 13.0], [7.9, 13.0], [8.0, 13.0], [8.1, 13.0], [8.2, 13.0], [8.3, 13.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 15.0], [9.1, 15.0], [9.2, 15.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 17.0], [10.9, 17.0], [11.0, 17.0], [11.1, 17.0], [11.2, 17.0], [11.3, 17.0], [11.4, 18.0], [11.5, 18.0], [11.6, 18.0], [11.7, 18.0], [11.8, 18.0], [11.9, 18.0], [12.0, 19.0], [12.1, 19.0], [12.2, 19.0], [12.3, 19.0], [12.4, 19.0], [12.5, 19.0], [12.6, 20.0], [12.7, 20.0], [12.8, 20.0], [12.9, 20.0], [13.0, 20.0], [13.1, 20.0], [13.2, 20.0], [13.3, 20.0], [13.4, 20.0], [13.5, 20.0], [13.6, 20.0], [13.7, 21.0], [13.8, 21.0], [13.9, 21.0], [14.0, 21.0], [14.1, 21.0], [14.2, 22.0], [14.3, 22.0], [14.4, 22.0], [14.5, 22.0], [14.6, 22.0], [14.7, 22.0], [14.8, 23.0], [14.9, 23.0], [15.0, 23.0], [15.1, 23.0], [15.2, 23.0], [15.3, 23.0], [15.4, 23.0], [15.5, 24.0], [15.6, 24.0], [15.7, 24.0], [15.8, 24.0], [15.9, 24.0], [16.0, 24.0], [16.1, 24.0], [16.2, 24.0], [16.3, 24.0], [16.4, 24.0], [16.5, 25.0], [16.6, 25.0], [16.7, 25.0], [16.8, 25.0], [16.9, 25.0], [17.0, 26.0], [17.1, 26.0], [17.2, 26.0], [17.3, 26.0], [17.4, 26.0], [17.5, 27.0], [17.6, 27.0], [17.7, 27.0], [17.8, 27.0], [17.9, 27.0], [18.0, 27.0], [18.1, 28.0], [18.2, 28.0], [18.3, 28.0], [18.4, 28.0], [18.5, 28.0], [18.6, 28.0], [18.7, 28.0], [18.8, 28.0], [18.9, 28.0], [19.0, 29.0], [19.1, 29.0], [19.2, 29.0], [19.3, 29.0], [19.4, 29.0], [19.5, 30.0], [19.6, 30.0], [19.7, 30.0], [19.8, 30.0], [19.9, 31.0], [20.0, 31.0], [20.1, 31.0], [20.2, 31.0], [20.3, 31.0], [20.4, 32.0], [20.5, 32.0], [20.6, 32.0], [20.7, 32.0], [20.8, 32.0], [20.9, 32.0], [21.0, 32.0], [21.1, 32.0], [21.2, 32.0], [21.3, 33.0], [21.4, 33.0], [21.5, 33.0], [21.6, 33.0], [21.7, 34.0], [21.8, 34.0], [21.9, 34.0], [22.0, 34.0], [22.1, 34.0], [22.2, 35.0], [22.3, 35.0], [22.4, 35.0], [22.5, 35.0], [22.6, 35.0], [22.7, 36.0], [22.8, 36.0], [22.9, 36.0], [23.0, 36.0], [23.1, 36.0], [23.2, 36.0], [23.3, 36.0], [23.4, 36.0], [23.5, 37.0], [23.6, 37.0], [23.7, 37.0], [23.8, 37.0], [23.9, 38.0], [24.0, 38.0], [24.1, 38.0], [24.2, 38.0], [24.3, 39.0], [24.4, 39.0], [24.5, 39.0], [24.6, 39.0], [24.7, 39.0], [24.8, 40.0], [24.9, 40.0], [25.0, 40.0], [25.1, 40.0], [25.2, 40.0], [25.3, 40.0], [25.4, 40.0], [25.5, 40.0], [25.6, 41.0], [25.7, 41.0], [25.8, 41.0], [25.9, 41.0], [26.0, 41.0], [26.1, 42.0], [26.2, 42.0], [26.3, 42.0], [26.4, 42.0], [26.5, 43.0], [26.6, 43.0], [26.7, 43.0], [26.8, 43.0], [26.9, 43.0], [27.0, 44.0], [27.1, 44.0], [27.2, 44.0], [27.3, 44.0], [27.4, 44.0], [27.5, 44.0], [27.6, 44.0], [27.7, 44.0], [27.8, 45.0], [27.9, 45.0], [28.0, 45.0], [28.1, 45.0], [28.2, 46.0], [28.3, 46.0], [28.4, 46.0], [28.5, 46.0], [28.6, 47.0], [28.7, 47.0], [28.8, 47.0], [28.9, 47.0], [29.0, 48.0], [29.1, 48.0], [29.2, 48.0], [29.3, 48.0], [29.4, 48.0], [29.5, 48.0], [29.6, 48.0], [29.7, 48.0], [29.8, 49.0], [29.9, 49.0], [30.0, 49.0], [30.1, 49.0], [30.2, 50.0], [30.3, 50.0], [30.4, 50.0], [30.5, 51.0], [30.6, 51.0], [30.7, 51.0], [30.8, 51.0], [30.9, 52.0], [31.0, 52.0], [31.1, 52.0], [31.2, 52.0], [31.3, 52.0], [31.4, 52.0], [31.5, 52.0], [31.6, 52.0], [31.7, 53.0], [31.8, 53.0], [31.9, 53.0], [32.0, 54.0], [32.1, 54.0], [32.2, 54.0], [32.3, 55.0], [32.4, 55.0], [32.5, 55.0], [32.6, 55.0], [32.7, 56.0], [32.8, 56.0], [32.9, 56.0], [33.0, 56.0], [33.1, 56.0], [33.2, 56.0], [33.3, 57.0], [33.4, 57.0], [33.5, 57.0], [33.6, 58.0], [33.7, 58.0], [33.8, 58.0], [33.9, 59.0], [34.0, 59.0], [34.1, 59.0], [34.2, 59.0], [34.3, 60.0], [34.4, 60.0], [34.5, 60.0], [34.6, 60.0], [34.7, 60.0], [34.8, 61.0], [34.9, 61.0], [35.0, 61.0], [35.1, 62.0], [35.2, 62.0], [35.3, 62.0], [35.4, 63.0], [35.5, 63.0], [35.6, 64.0], [35.7, 64.0], [35.8, 64.0], [35.9, 64.0], [36.0, 64.0], [36.1, 65.0], [36.2, 65.0], [36.3, 65.0], [36.4, 66.0], [36.5, 66.0], [36.6, 67.0], [36.7, 67.0], [36.8, 68.0], [36.9, 68.0], [37.0, 68.0], [37.1, 68.0], [37.2, 68.0], [37.3, 69.0], [37.4, 69.0], [37.5, 70.0], [37.6, 71.0], [37.7, 71.0], [37.8, 72.0], [37.9, 72.0], [38.0, 72.0], [38.1, 72.0], [38.2, 73.0], [38.3, 73.0], [38.4, 74.0], [38.5, 74.0], [38.6, 75.0], [38.7, 75.0], [38.8, 76.0], [38.9, 76.0], [39.0, 76.0], [39.1, 77.0], [39.2, 77.0], [39.3, 78.0], [39.4, 79.0], [39.5, 79.0], [39.6, 80.0], [39.7, 80.0], [39.8, 80.0], [39.9, 81.0], [40.0, 82.0], [40.1, 82.0], [40.2, 83.0], [40.3, 84.0], [40.4, 84.0], [40.5, 84.0], [40.6, 85.0], [40.7, 86.0], [40.8, 87.0], [40.9, 88.0], [41.0, 88.0], [41.1, 89.0], [41.2, 90.0], [41.3, 91.0], [41.4, 92.0], [41.5, 92.0], [41.6, 94.0], [41.7, 95.0], [41.8, 96.0], [41.9, 96.0], [42.0, 98.0], [42.1, 100.0], [42.2, 101.0], [42.3, 103.0], [42.4, 104.0], [42.5, 106.0], [42.6, 108.0], [42.7, 109.0], [42.8, 112.0], [42.9, 113.0], [43.0, 115.0], [43.1, 118.0], [43.2, 120.0], [43.3, 123.0], [43.4, 125.0], [43.5, 128.0], [43.6, 130.0], [43.7, 132.0], [43.8, 133.0], [43.9, 135.0], [44.0, 136.0], [44.1, 137.0], [44.2, 138.0], [44.3, 139.0], [44.4, 140.0], [44.5, 140.0], [44.6, 141.0], [44.7, 142.0], [44.8, 142.0], [44.9, 143.0], [45.0, 144.0], [45.1, 144.0], [45.2, 145.0], [45.3, 145.0], [45.4, 146.0], [45.5, 146.0], [45.6, 147.0], [45.7, 147.0], [45.8, 147.0], [45.9, 148.0], [46.0, 148.0], [46.1, 149.0], [46.2, 149.0], [46.3, 149.0], [46.4, 150.0], [46.5, 150.0], [46.6, 151.0], [46.7, 151.0], [46.8, 151.0], [46.9, 152.0], [47.0, 152.0], [47.1, 152.0], [47.2, 153.0], [47.3, 153.0], [47.4, 153.0], [47.5, 154.0], [47.6, 154.0], [47.7, 154.0], [47.8, 155.0], [47.9, 155.0], [48.0, 155.0], [48.1, 155.0], [48.2, 156.0], [48.3, 156.0], [48.4, 156.0], [48.5, 157.0], [48.6, 157.0], [48.7, 157.0], [48.8, 157.0], [48.9, 158.0], [49.0, 158.0], [49.1, 158.0], [49.2, 159.0], [49.3, 159.0], [49.4, 159.0], [49.5, 159.0], [49.6, 160.0], [49.7, 160.0], [49.8, 160.0], [49.9, 160.0], [50.0, 161.0], [50.1, 161.0], [50.2, 161.0], [50.3, 162.0], [50.4, 162.0], [50.5, 162.0], [50.6, 162.0], [50.7, 163.0], [50.8, 163.0], [50.9, 163.0], [51.0, 164.0], [51.1, 164.0], [51.2, 164.0], [51.3, 164.0], [51.4, 165.0], [51.5, 165.0], [51.6, 165.0], [51.7, 165.0], [51.8, 166.0], [51.9, 166.0], [52.0, 166.0], [52.1, 167.0], [52.2, 167.0], [52.3, 167.0], [52.4, 168.0], [52.5, 168.0], [52.6, 168.0], [52.7, 168.0], [52.8, 169.0], [52.9, 169.0], [53.0, 169.0], [53.1, 169.0], [53.2, 170.0], [53.3, 170.0], [53.4, 170.0], [53.5, 170.0], [53.6, 171.0], [53.7, 171.0], [53.8, 171.0], [53.9, 172.0], [54.0, 172.0], [54.1, 172.0], [54.2, 172.0], [54.3, 173.0], [54.4, 173.0], [54.5, 173.0], [54.6, 174.0], [54.7, 174.0], [54.8, 174.0], [54.9, 174.0], [55.0, 175.0], [55.1, 175.0], [55.2, 175.0], [55.3, 175.0], [55.4, 176.0], [55.5, 176.0], [55.6, 176.0], [55.7, 176.0], [55.8, 177.0], [55.9, 177.0], [56.0, 177.0], [56.1, 178.0], [56.2, 178.0], [56.3, 178.0], [56.4, 178.0], [56.5, 179.0], [56.6, 179.0], [56.7, 179.0], [56.8, 180.0], [56.9, 180.0], [57.0, 180.0], [57.1, 180.0], [57.2, 181.0], [57.3, 181.0], [57.4, 181.0], [57.5, 181.0], [57.6, 182.0], [57.7, 182.0], [57.8, 182.0], [57.9, 183.0], [58.0, 183.0], [58.1, 183.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 187.0], [59.4, 187.0], [59.5, 187.0], [59.6, 188.0], [59.7, 188.0], [59.8, 188.0], [59.9, 188.0], [60.0, 189.0], [60.1, 189.0], [60.2, 189.0], [60.3, 190.0], [60.4, 190.0], [60.5, 190.0], [60.6, 190.0], [60.7, 191.0], [60.8, 191.0], [60.9, 191.0], [61.0, 192.0], [61.1, 192.0], [61.2, 192.0], [61.3, 192.0], [61.4, 193.0], [61.5, 193.0], [61.6, 193.0], [61.7, 194.0], [61.8, 194.0], [61.9, 194.0], [62.0, 195.0], [62.1, 195.0], [62.2, 195.0], [62.3, 195.0], [62.4, 196.0], [62.5, 196.0], [62.6, 196.0], [62.7, 197.0], [62.8, 197.0], [62.9, 197.0], [63.0, 198.0], [63.1, 198.0], [63.2, 198.0], [63.3, 199.0], [63.4, 199.0], [63.5, 199.0], [63.6, 200.0], [63.7, 200.0], [63.8, 200.0], [63.9, 201.0], [64.0, 201.0], [64.1, 201.0], [64.2, 202.0], [64.3, 202.0], [64.4, 202.0], [64.5, 203.0], [64.6, 203.0], [64.7, 203.0], [64.8, 204.0], [64.9, 204.0], [65.0, 204.0], [65.1, 205.0], [65.2, 205.0], [65.3, 205.0], [65.4, 206.0], [65.5, 206.0], [65.6, 207.0], [65.7, 207.0], [65.8, 207.0], [65.9, 208.0], [66.0, 208.0], [66.1, 208.0], [66.2, 209.0], [66.3, 209.0], [66.4, 209.0], [66.5, 210.0], [66.6, 210.0], [66.7, 211.0], [66.8, 211.0], [66.9, 211.0], [67.0, 212.0], [67.1, 212.0], [67.2, 212.0], [67.3, 213.0], [67.4, 213.0], [67.5, 214.0], [67.6, 214.0], [67.7, 215.0], [67.8, 215.0], [67.9, 215.0], [68.0, 216.0], [68.1, 216.0], [68.2, 216.0], [68.3, 217.0], [68.4, 217.0], [68.5, 218.0], [68.6, 218.0], [68.7, 219.0], [68.8, 219.0], [68.9, 219.0], [69.0, 220.0], [69.1, 220.0], [69.2, 220.0], [69.3, 221.0], [69.4, 221.0], [69.5, 222.0], [69.6, 222.0], [69.7, 223.0], [69.8, 223.0], [69.9, 224.0], [70.0, 224.0], [70.1, 224.0], [70.2, 224.0], [70.3, 225.0], [70.4, 225.0], [70.5, 226.0], [70.6, 226.0], [70.7, 227.0], [70.8, 227.0], [70.9, 228.0], [71.0, 228.0], [71.1, 228.0], [71.2, 228.0], [71.3, 229.0], [71.4, 229.0], [71.5, 230.0], [71.6, 230.0], [71.7, 231.0], [71.8, 231.0], [71.9, 232.0], [72.0, 232.0], [72.1, 232.0], [72.2, 232.0], [72.3, 233.0], [72.4, 233.0], [72.5, 234.0], [72.6, 234.0], [72.7, 235.0], [72.8, 235.0], [72.9, 235.0], [73.0, 236.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 237.0], [73.5, 237.0], [73.6, 238.0], [73.7, 238.0], [73.8, 239.0], [73.9, 239.0], [74.0, 239.0], [74.1, 240.0], [74.2, 240.0], [74.3, 240.0], [74.4, 240.0], [74.5, 241.0], [74.6, 241.0], [74.7, 242.0], [74.8, 242.0], [74.9, 243.0], [75.0, 243.0], [75.1, 243.0], [75.2, 244.0], [75.3, 244.0], [75.4, 244.0], [75.5, 244.0], [75.6, 245.0], [75.7, 245.0], [75.8, 246.0], [75.9, 246.0], [76.0, 247.0], [76.1, 247.0], [76.2, 247.0], [76.3, 248.0], [76.4, 248.0], [76.5, 248.0], [76.6, 248.0], [76.7, 248.0], [76.8, 249.0], [76.9, 249.0], [77.0, 250.0], [77.1, 250.0], [77.2, 251.0], [77.3, 251.0], [77.4, 251.0], [77.5, 252.0], [77.6, 252.0], [77.7, 252.0], [77.8, 252.0], [77.9, 252.0], [78.0, 253.0], [78.1, 253.0], [78.2, 254.0], [78.3, 254.0], [78.4, 255.0], [78.5, 255.0], [78.6, 255.0], [78.7, 256.0], [78.8, 256.0], [78.9, 256.0], [79.0, 256.0], [79.1, 256.0], [79.2, 257.0], [79.3, 257.0], [79.4, 258.0], [79.5, 258.0], [79.6, 259.0], [79.7, 259.0], [79.8, 259.0], [79.9, 259.0], [80.0, 260.0], [80.1, 260.0], [80.2, 260.0], [80.3, 260.0], [80.4, 261.0], [80.5, 261.0], [80.6, 262.0], [80.7, 262.0], [80.8, 263.0], [80.9, 263.0], [81.0, 263.0], [81.1, 264.0], [81.2, 264.0], [81.3, 264.0], [81.4, 264.0], [81.5, 265.0], [81.6, 265.0], [81.7, 266.0], [81.8, 266.0], [81.9, 267.0], [82.0, 267.0], [82.1, 267.0], [82.2, 268.0], [82.3, 268.0], [82.4, 268.0], [82.5, 268.0], [82.6, 269.0], [82.7, 269.0], [82.8, 269.0], [82.9, 270.0], [83.0, 271.0], [83.1, 271.0], [83.2, 271.0], [83.3, 272.0], [83.4, 272.0], [83.5, 272.0], [83.6, 272.0], [83.7, 273.0], [83.8, 273.0], [83.9, 274.0], [84.0, 274.0], [84.1, 275.0], [84.2, 275.0], [84.3, 275.0], [84.4, 276.0], [84.5, 276.0], [84.6, 276.0], [84.7, 277.0], [84.8, 277.0], [84.9, 278.0], [85.0, 278.0], [85.1, 279.0], [85.2, 279.0], [85.3, 280.0], [85.4, 280.0], [85.5, 280.0], [85.6, 280.0], [85.7, 281.0], [85.8, 282.0], [85.9, 282.0], [86.0, 283.0], [86.1, 283.0], [86.2, 283.0], [86.3, 284.0], [86.4, 284.0], [86.5, 284.0], [86.6, 285.0], [86.7, 286.0], [86.8, 286.0], [86.9, 287.0], [87.0, 287.0], [87.1, 288.0], [87.2, 288.0], [87.3, 288.0], [87.4, 289.0], [87.5, 289.0], [87.6, 290.0], [87.7, 291.0], [87.8, 291.0], [87.9, 292.0], [88.0, 292.0], [88.1, 292.0], [88.2, 293.0], [88.3, 294.0], [88.4, 294.0], [88.5, 295.0], [88.6, 296.0], [88.7, 296.0], [88.8, 296.0], [88.9, 297.0], [89.0, 297.0], [89.1, 298.0], [89.2, 299.0], [89.3, 300.0], [89.4, 300.0], [89.5, 300.0], [89.6, 301.0], [89.7, 302.0], [89.8, 303.0], [89.9, 304.0], [90.0, 304.0], [90.1, 304.0], [90.2, 306.0], [90.3, 307.0], [90.4, 307.0], [90.5, 308.0], [90.6, 309.0], [90.7, 310.0], [90.8, 311.0], [90.9, 311.0], [91.0, 312.0], [91.1, 313.0], [91.2, 314.0], [91.3, 315.0], [91.4, 316.0], [91.5, 316.0], [91.6, 318.0], [91.7, 319.0], [91.8, 320.0], [91.9, 321.0], [92.0, 322.0], [92.1, 324.0], [92.2, 325.0], [92.3, 326.0], [92.4, 327.0], [92.5, 328.0], [92.6, 331.0], [92.7, 332.0], [92.8, 334.0], [92.9, 336.0], [93.0, 338.0], [93.1, 340.0], [93.2, 343.0], [93.3, 345.0], [93.4, 348.0], [93.5, 351.0], [93.6, 355.0], [93.7, 359.0], [93.8, 364.0], [93.9, 370.0], [94.0, 377.0], [94.1, 387.0], [94.2, 397.0], [94.3, 408.0], [94.4, 417.0], [94.5, 425.0], [94.6, 432.0], [94.7, 437.0], [94.8, 442.0], [94.9, 446.0], [95.0, 449.0], [95.1, 452.0], [95.2, 456.0], [95.3, 459.0], [95.4, 461.0], [95.5, 464.0], [95.6, 466.0], [95.7, 468.0], [95.8, 471.0], [95.9, 473.0], [96.0, 476.0], [96.1, 478.0], [96.2, 480.0], [96.3, 482.0], [96.4, 484.0], [96.5, 487.0], [96.6, 489.0], [96.7, 492.0], [96.8, 494.0], [96.9, 496.0], [97.0, 499.0], [97.1, 501.0], [97.2, 503.0], [97.3, 506.0], [97.4, 508.0], [97.5, 512.0], [97.6, 515.0], [97.7, 517.0], [97.8, 520.0], [97.9, 523.0], [98.0, 527.0], [98.1, 531.0], [98.2, 535.0], [98.3, 540.0], [98.4, 545.0], [98.5, 552.0], [98.6, 559.0], [98.7, 568.0], [98.8, 581.0], [98.9, 604.0], [99.0, 639.0], [99.1, 668.0], [99.2, 687.0], [99.3, 704.0], [99.4, 716.0], [99.5, 733.0], [99.6, 752.0], [99.7, 780.0], [99.8, 852.0], [99.9, 956.0], [100.0, 1647.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 161780.0, "series": [{"data": [[0.0, 161780.0], [1500.0, 2.0], [500.0, 4844.0], [1000.0, 107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 500, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 161892.0, "series": [{"data": [[0.0, 161892.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4839.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.633033033033032, "minX": 1.59271986E12, "maxY": 100.0, "series": [{"data": [[1.59271998E12, 100.0], [1.59272013E12, 100.0], [1.59271995E12, 100.0], [1.5927201E12, 100.0], [1.59271992E12, 87.23034840195812], [1.59272007E12, 100.0], [1.59271989E12, 40.01086103903932], [1.59272004E12, 100.0], [1.59271986E12, 8.633033033033032], [1.59272001E12, 100.0], [1.59272016E12, 99.57828303937144]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59272016E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11.640350877192981, "minX": 1.0, "maxY": 178.76194335596395, "series": [{"data": [[2.0, 11.640350877192981], [3.0, 11.753012048192769], [4.0, 13.949720670391052], [5.0, 14.112107623318389], [6.0, 14.62835249042146], [7.0, 15.257142857142851], [8.0, 15.048780487804887], [9.0, 16.948170731707325], [10.0, 18.27976190476191], [11.0, 20.596923076923076], [12.0, 24.740614334470997], [13.0, 27.12244897959184], [14.0, 25.547854785478552], [15.0, 28.30275229357799], [16.0, 31.003194888178925], [17.0, 34.00993377483443], [18.0, 37.32068965517238], [19.0, 33.210227272727224], [20.0, 37.354938271604944], [21.0, 42.76632302405496], [22.0, 47.420494699646625], [23.0, 43.64741641337386], [24.0, 47.66107382550339], [25.0, 54.14893617021278], [26.0, 53.905923344947745], [27.0, 50.569182389937154], [28.0, 59.296167247386755], [29.0, 71.2685950413223], [30.0, 59.066455696202524], [31.0, 52.78309859154935], [32.0, 66.68683274021356], [33.0, 76.14559386973177], [34.0, 61.76785714285723], [35.0, 60.03409090909093], [36.0, 65.32522796352589], [37.0, 62.18082191780825], [38.0, 62.64525139664803], [39.0, 68.33333333333326], [40.0, 68.66946778711475], [41.0, 71.2897727272727], [42.0, 71.13505747126433], [43.0, 77.46107784431133], [44.0, 71.12938005390836], [45.0, 72.70108695652175], [46.0, 81.76900584795321], [47.0, 77.81491712707181], [48.0, 77.4297520661157], [49.0, 85.43930635838147], [50.0, 82.7010869565218], [51.0, 85.49287749287748], [52.0, 87.05665722379604], [53.0, 87.23398328690809], [54.0, 88.03932584269657], [55.0, 98.40336134453783], [56.0, 94.16619718309859], [57.0, 93.18749999999996], [58.0, 100.233918128655], [59.0, 97.83513513513509], [60.0, 103.0811594202898], [61.0, 100.44044321329639], [62.0, 115.2700296735905], [63.0, 110.57185628742519], [64.0, 111.00000000000003], [65.0, 110.0087209302326], [66.0, 113.10571428571427], [67.0, 112.45507246376809], [68.0, 118.24858757062138], [69.0, 118.65915492957751], [70.0, 126.89877300613497], [71.0, 121.93123209169055], [72.0, 126.1889534883721], [73.0, 130.87941176470594], [74.0, 121.68405797101444], [75.0, 128.69014084507046], [76.0, 134.17484662576683], [77.0, 132.38375350140046], [78.0, 132.68376068376074], [79.0, 138.8901734104046], [80.0, 130.6864864864864], [81.0, 139.8997050147492], [82.0, 142.36363636363632], [83.0, 143.9083094555874], [84.0, 142.67151162790714], [85.0, 150.62973760932937], [86.0, 151.722891566265], [87.0, 155.80000000000018], [88.0, 151.3628318584072], [89.0, 162.42941176470595], [90.0, 142.86700767263417], [91.0, 151.5668604651163], [92.0, 158.9329446064139], [93.0, 163.61492537313438], [94.0, 163.75073313782985], [95.0, 166.4735376044566], [96.0, 177.36227544910162], [97.0, 166.64841498559085], [98.0, 173.95652173913044], [99.0, 161.62021857923497], [100.0, 178.76194335596395], [1.0, 79.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[90.85218882884664, 162.0321951863127]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13542.0, "minX": 1.59271986E12, "maxY": 1355248.6, "series": [{"data": [[1.59271998E12, 1347658.7666666666], [1.59272013E12, 1255409.8666666667], [1.59271995E12, 1353531.2], [1.5927201E12, 1121093.9], [1.59271992E12, 1349942.6333333333], [1.59272007E12, 1347622.9], [1.59271989E12, 1288278.9], [1.59272004E12, 1353562.5333333334], [1.59271986E12, 258870.16666666666], [1.59272001E12, 1355248.6], [1.59272016E12, 929948.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59271998E12, 70503.8], [1.59272013E12, 65676.66666666667], [1.59271995E12, 70808.8], [1.5927201E12, 58649.46666666667], [1.59271992E12, 70617.66666666667], [1.59272007E12, 70495.66666666667], [1.59271989E12, 67396.86666666667], [1.59272004E12, 70812.86666666667], [1.59271986E12, 13542.0], [1.59272001E12, 70894.2], [1.59272016E12, 48649.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59272016E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17.687687687687717, "minX": 1.59271986E12, "maxY": 207.41526834003557, "series": [{"data": [[1.59271998E12, 172.88412066678114], [1.59272013E12, 185.69628482972024], [1.59271995E12, 172.05530668504505], [1.5927201E12, 207.41526834003557], [1.59271992E12, 149.96095594586785], [1.59272007E12, 172.99625036054363], [1.59271989E12, 70.2399082845591], [1.59272004E12, 172.09245965657763], [1.59271986E12, 17.687687687687717], [1.59272001E12, 172.3496816382725], [1.59272016E12, 184.3593580205632]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59272016E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 17.66816816816813, "minX": 1.59271986E12, "maxY": 207.4070863957836, "series": [{"data": [[1.59271998E12, 172.8815827421133], [1.59272013E12, 185.69269349845226], [1.59271995E12, 172.05415805191888], [1.5927201E12, 207.4070863957836], [1.59271992E12, 149.95755830693986], [1.59272007E12, 172.99446207095468], [1.59271989E12, 70.22977131478876], [1.59272004E12, 172.08993280882018], [1.59271986E12, 17.66816816816813], [1.59272001E12, 172.34830493890905], [1.59272016E12, 184.35626515088293]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59272016E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.3436428989383867E-4, "minX": 1.59271986E12, "maxY": 0.007807807807807823, "series": [{"data": [[1.59271998E12, 4.6144084905116295E-4], [1.59272013E12, 0.0011145510835913264], [1.59271995E12, 6.317482196186551E-4], [1.5927201E12, 6.240465954791266E-4], [1.59271992E12, 0.0013820904117477668], [1.59272007E12, 7.499278915488914E-4], [1.59271989E12, 0.002594581548301466], [1.59272004E12, 5.168552231091727E-4], [1.59271986E12, 0.007807807807807823], [1.59272001E12, 4.015373142889905E-4], [1.59272016E12, 3.3436428989383867E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59272016E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.59271986E12, "maxY": 1647.0, "series": [{"data": [[1.59271998E12, 1403.0], [1.59272013E12, 1628.0], [1.59271995E12, 1411.0], [1.5927201E12, 1647.0], [1.59271992E12, 1112.0], [1.59272007E12, 1215.0], [1.59271989E12, 690.0], [1.59272004E12, 1216.0], [1.59271986E12, 389.0], [1.59272001E12, 1377.0], [1.59272016E12, 1411.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59271998E12, 4.0], [1.59272013E12, 3.0], [1.59271995E12, 3.0], [1.5927201E12, 4.0], [1.59271992E12, 4.0], [1.59272007E12, 5.0], [1.59271989E12, 3.0], [1.59272004E12, 4.0], [1.59271986E12, 2.0], [1.59272001E12, 4.0], [1.59272016E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59271998E12, 4.0], [1.59272013E12, 4.0], [1.59271995E12, 3.0], [1.5927201E12, 4.0], [1.59271992E12, 4.0], [1.59272007E12, 5.0], [1.59271989E12, 3.0], [1.59272004E12, 4.0], [1.59271986E12, 2.0], [1.59272001E12, 4.0], [1.59272016E12, 4.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59271998E12, 4.0], [1.59272013E12, 3.0], [1.59271995E12, 3.0], [1.5927201E12, 4.0], [1.59271992E12, 4.0], [1.59272007E12, 5.0], [1.59271989E12, 3.0], [1.59272004E12, 4.0], [1.59271986E12, 2.0], [1.59272001E12, 4.0], [1.59272016E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59271998E12, 0.0], [1.59272013E12, 0.0], [1.59271995E12, 0.0], [1.5927201E12, 1.0], [1.59271992E12, 0.0], [1.59272007E12, 0.0], [1.59271989E12, 0.0], [1.59272004E12, 1.0], [1.59271986E12, 1.0], [1.59272001E12, 0.0], [1.59272016E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59271998E12, 174.0], [1.59272013E12, 217.0], [1.59271995E12, 86.0], [1.5927201E12, 236.0], [1.59271992E12, 158.0], [1.59272007E12, 177.0], [1.59271989E12, 52.0], [1.59272004E12, 175.0], [1.59271986E12, 16.0], [1.59272001E12, 174.0], [1.59272016E12, 182.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59272016E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 7.0, "maxY": 287.0, "series": [{"data": [[7.0, 179.0], [124.0, 11.0], [284.0, 11.0], [372.0, 13.0], [389.0, 287.0], [401.0, 276.0], [422.0, 283.5], [424.0, 276.0], [445.0, 57.0], [435.0, 271.0], [439.0, 261.0], [443.0, 269.0], [441.0, 142.0], [452.0, 14.0], [458.0, 68.0], [456.0, 262.0], [475.0, 77.5], [476.0, 241.5], [469.0, 247.0], [479.0, 244.0], [471.0, 243.0], [468.0, 252.0], [482.0, 56.0], [483.0, 257.0], [494.0, 248.0], [488.0, 245.0], [495.0, 238.0], [481.0, 228.0], [509.0, 20.0], [496.0, 24.0], [506.0, 29.0], [511.0, 58.0], [508.0, 230.0], [499.0, 235.0], [504.0, 228.0], [503.0, 228.0], [501.0, 252.0], [510.0, 233.5], [540.0, 17.0], [534.0, 24.0], [532.0, 234.0], [530.0, 68.0], [528.0, 32.0], [543.0, 189.0], [535.0, 48.0], [517.0, 72.0], [518.0, 237.0], [539.0, 220.0], [537.0, 223.0], [514.0, 73.0], [527.0, 218.0], [521.0, 228.0], [572.0, 173.0], [553.0, 39.0], [552.0, 218.0], [554.0, 184.0], [555.0, 97.0], [575.0, 157.0], [556.0, 171.0], [568.0, 168.0], [550.0, 189.0], [549.0, 184.0], [544.0, 87.0], [559.0, 181.0], [557.0, 180.0], [558.0, 185.0], [569.0, 183.0], [571.0, 179.0], [570.0, 179.0], [567.0, 168.0], [564.0, 179.0], [565.0, 180.0], [566.0, 177.0], [573.0, 175.0], [574.0, 176.0], [560.0, 177.5], [561.0, 180.5], [562.0, 102.0], [563.0, 75.0], [582.0, 143.0], [591.0, 64.0], [584.0, 93.5], [585.0, 172.0], [586.0, 74.0], [587.0, 92.0], [578.0, 67.0], [577.0, 167.0], [576.0, 175.0], [583.0, 154.0], [600.0, 78.0], [604.0, 163.0], [605.0, 169.0], [602.0, 90.0], [603.0, 170.0], [592.0, 76.5], [607.0, 75.0], [581.0, 168.0], [579.0, 174.5], [580.0, 176.0], [594.0, 133.5], [595.0, 170.0], [597.0, 171.0], [598.0, 171.0], [596.0, 70.5], [593.0, 100.0], [588.0, 140.0], [590.0, 132.0], [589.0, 170.0], [608.0, 62.5], [615.0, 165.0], [610.0, 168.0], [611.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 615.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.0, "minX": 7.0, "maxY": 287.0, "series": [{"data": [[7.0, 179.0], [124.0, 11.0], [284.0, 11.0], [372.0, 13.0], [389.0, 287.0], [401.0, 276.0], [422.0, 283.5], [424.0, 276.0], [445.0, 57.0], [435.0, 271.0], [439.0, 261.0], [443.0, 269.0], [441.0, 142.0], [452.0, 14.0], [458.0, 68.0], [456.0, 262.0], [475.0, 77.5], [476.0, 241.5], [469.0, 247.0], [479.0, 244.0], [471.0, 243.0], [468.0, 252.0], [482.0, 56.0], [483.0, 257.0], [494.0, 248.0], [488.0, 245.0], [495.0, 238.0], [481.0, 228.0], [509.0, 20.0], [496.0, 24.0], [506.0, 29.0], [511.0, 58.0], [508.0, 230.0], [499.0, 235.0], [504.0, 228.0], [503.0, 228.0], [501.0, 252.0], [510.0, 233.5], [540.0, 17.0], [534.0, 24.0], [532.0, 234.0], [530.0, 68.0], [528.0, 32.0], [543.0, 189.0], [535.0, 48.0], [517.0, 72.0], [518.0, 237.0], [539.0, 220.0], [537.0, 223.0], [514.0, 73.0], [527.0, 218.0], [521.0, 228.0], [572.0, 173.0], [553.0, 39.0], [552.0, 218.0], [554.0, 184.0], [555.0, 97.0], [575.0, 157.0], [556.0, 171.0], [568.0, 168.0], [550.0, 189.0], [549.0, 184.0], [544.0, 87.0], [559.0, 181.0], [557.0, 180.0], [558.0, 185.0], [569.0, 183.0], [571.0, 179.0], [570.0, 179.0], [567.0, 168.0], [564.0, 179.0], [565.0, 180.0], [566.0, 177.0], [573.0, 175.0], [574.0, 176.0], [560.0, 177.5], [561.0, 180.5], [562.0, 102.0], [563.0, 75.0], [582.0, 143.0], [591.0, 64.0], [584.0, 93.5], [585.0, 172.0], [586.0, 74.0], [587.0, 92.0], [578.0, 67.0], [577.0, 167.0], [576.0, 175.0], [583.0, 154.0], [600.0, 78.0], [604.0, 163.0], [605.0, 169.0], [602.0, 90.0], [603.0, 170.0], [592.0, 76.5], [607.0, 75.0], [581.0, 168.0], [579.0, 174.5], [580.0, 176.0], [594.0, 133.5], [595.0, 170.0], [597.0, 171.0], [598.0, 171.0], [596.0, 70.5], [593.0, 100.0], [588.0, 140.0], [590.0, 132.0], [589.0, 170.0], [608.0, 62.5], [615.0, 165.0], [610.0, 168.0], [611.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 615.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 128.8, "minX": 1.59271986E12, "maxY": 581.1, "series": [{"data": [[1.59271998E12, 578.2666666666667], [1.59272013E12, 540.3666666666667], [1.59271995E12, 580.7666666666667], [1.5927201E12, 478.3666666666667], [1.59271992E12, 578.2666666666667], [1.59272007E12, 577.9], [1.59271989E12, 554.1], [1.59272004E12, 579.6], [1.59271986E12, 128.8], [1.59272001E12, 581.1], [1.59272016E12, 380.23333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59272016E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.59271986E12, "maxY": 581.1, "series": [{"data": [[1.59271998E12, 577.9], [1.59272013E12, 538.3333333333334], [1.59271995E12, 580.4], [1.5927201E12, 480.73333333333335], [1.59271992E12, 578.8333333333334], [1.59272007E12, 577.8333333333334], [1.59271989E12, 552.4333333333333], [1.59272004E12, 580.4333333333333], [1.59271986E12, 111.0], [1.59272001E12, 581.1], [1.59272016E12, 398.76666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 30000, "maxX": 1.59272016E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.59271986E12, "maxY": 581.1, "series": [{"data": [[1.59271998E12, 577.9], [1.59272013E12, 538.3333333333334], [1.59271995E12, 580.4], [1.5927201E12, 480.73333333333335], [1.59271992E12, 578.8333333333334], [1.59272007E12, 577.8333333333334], [1.59271989E12, 552.4333333333333], [1.59272004E12, 580.4333333333333], [1.59271986E12, 111.0], [1.59272001E12, 581.1], [1.59272016E12, 398.76666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59272016E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.59271986E12, "maxY": 581.1, "series": [{"data": [[1.59271998E12, 577.9], [1.59272013E12, 538.3333333333334], [1.59271995E12, 580.4], [1.5927201E12, 480.73333333333335], [1.59271992E12, 578.8333333333334], [1.59272007E12, 577.8333333333334], [1.59271989E12, 552.4333333333333], [1.59272004E12, 580.4333333333333], [1.59271986E12, 111.0], [1.59272001E12, 581.1], [1.59272016E12, 398.76666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 30000, "maxX": 1.59272016E12, "title": "Total Transactions Per Second"}},
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

