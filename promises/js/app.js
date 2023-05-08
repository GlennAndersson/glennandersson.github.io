(function(app) {
    "use strict";
    const pageItems = {};

    app.promisesStartup = function() {
        pageItems.loadData = document.getElementById("loadData");
        pageItems.refreshData = document.getElementById("refreshData");
        pageItems.waitIndicator = document.getElementById("wait-indicator");
        pageItems.logger = document.getElementById("logger");
        pageItems.container = document.getElementById("container");
        pageItems.waitMessage = document.getElementById("wait");
        pageItems.dim = document.getElementById("dim");

        pageItems.loadData.addEventListener("click", loadPromiseSetsData);
        pageItems.refreshData.addEventListener("click", loadPromiseSetsDataTwo);
    }
    
    function loadPromiseSetsData(e) {
        console.log("Loading...");
        pageItems.waitIndicator.style.display = "flex";
        pageItems.loadData.style.display = "none";
        pageItems.dim.style.display = "block";

        const promise1 = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Promise #1"), 4000);
        });

        const promise2 = new Promise(function(resolve, reject) {
            setTimeout(() => reject("Promise #2"), 2000);
        });
        
        const promise3 = new Promise(function(resolve, reject) {
            setTimeout(() => reject("Promise #3"), 3000);
        });

        Promise.allSettled([promise1, promise2, promise3])
            .then(results => {
                console.log(results)
                pageItems.logger.innerText = JSON.stringify(results);
            })
            .finally(() => {
                console.log("Done");
                pageItems.waitIndicator.style.display = "none";
                pageItems.refreshData.style.display = "inline-block";
                pageItems.container.style.display = "flex";
                pageItems.dim.style.display = "none";

            });
    }
    function loadPromiseSetsDataTwo(e) {
        
        console.log("Loading...");
        pageItems.waitIndicator.style.display = "flex";
        pageItems.refreshData.style.display = "none";
        pageItems.container.style.display = "none";
        pageItems.dim.style.display = "block";
        pageItems.waitMessage.innerText ="Refreshing values. Please wait..."

        const promise1 = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Promise #1"), 5000);
        });

        const promise2 = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Promise #2"), 2000);
        });
        
        const promise3 = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Promise #3"), 3000);
        });

        Promise.allSettled([promise1, promise2, promise3])
            .then(results => {
                console.log(results)
                pageItems.logger.innerText = JSON.stringify(results);
            })
            .finally(() => {
                console.log("Done");
                pageItems.waitIndicator.style.display = "none";
                pageItems.refreshData.style.display = "none";
                pageItems.container.style.display = "flex";
                pageItems.dim.style.display = "none";
            });
    }
})(window.app = window.app || {});