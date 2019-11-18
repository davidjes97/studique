<template>
<div>
    <div>
        <h2>studique</h2>
    </div>
    <div id="askForm">
        <form>
            <h3 id="label" for="question">Question:</h3>
            <input type="text" v-model="question" id="question"/>
        </form>
        <button @click="buttonHandler" id="askButton">Ask</button>
    </div>
</div>
</template>

<script>
export default {
    // data: function(){
    //     question: ""
    // }   
};
</script>

<style scoped>
    #askForm{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-bottom: 2px solid gray;
    margin: 20px;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    }

    #question {
        border-style: solid;
        border: 2px;
        border-color: black;
    }

    #askButton {
        border-radius: 5px;
        margin: 5px;
        width: fit-content;
        border: 2px solid gray;
    }

</style>