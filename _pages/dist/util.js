const queryString=window.location.search,params=new URLSearchParams(queryString),textureName=params.get("texture"),modelName=params.get("model"),modelSelection=document.querySelector("#model-selector"),textureSelection=document.querySelector("#texture-selector");modelSelection.value=params.get("model"),textureSelection.value=params.get("texture"),modelSelection.addEventListener("change",(()=>{window.location=`?model=${modelSelection.value}&texture=${params.get("texture")}`})),textureSelection.addEventListener("change",(()=>{window.location=`?model=${params.get("model")}&texture=${textureSelection.value}`}));