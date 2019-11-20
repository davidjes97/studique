<template>
  <div>
    <div id="dashboard">
      <div id="tagColumn"></div>
      <div>
        <div id="askForm">
          <h3 id="label" for="question">Question:</h3>
          <p></p>
          <textarea v-model="text" rows="0" max-rows="4" id="question"></textarea>

          <v-btn color="primary" @click="buttonHandler" id="askButton">Ask</v-btn>
        </div>
        <div id="cards">
            <v-list-item>
                <v-card id="questionCard" class="mx-auto"
                max-width="1000px"
                outlined
                :elevation="3"
                >
                <div id ="username" class="overline mb-4">USER's NAME</div>
                <v-card-text>
                <div class="text--primary">
                    How do these questions work? Just writing text to try and fill the page</div>
                </v-card-text>
                </v-card>
            </v-list-item>
        </div>
      </div>
      <div id="emptyColumn"></div>
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
#questionCard {
    margin: 5px;
    padding: 5px;
    width: 98%;
}

#username {
    padding: 5px;
}

#dashboard {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}

#askForm {
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr auto;
  border-bottom: 2px solid gray;
  padding: 5px;
}

#tagColumn {
  background: lightgrey;
}

#emptyColumn {
  background: lightgrey;
}

#question {
  border-style: solid;
  border: 2px;
  border-color: black;
}

#askButton {
  margin: 5px;
}
</style>