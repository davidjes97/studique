<template>
  <div>
    <div id="dashboard">
      <div id="tagColumn"></div>
      <div>
        <div id="askForm">
          <h3 id="label" for="question">Question:</h3>
          <p></p>
          <v-container fluid>
            <v-textarea clearable clear-icon="x" auto-grow rounded outlined rows="1"></v-textarea>
          </v-container>

          <v-btn color="primary" @click="buttonHandler" id="askButton">Ask</v-btn>
        </div>
        <div id="cards">
          <v-list-item>
            <v-card id="questionCard" class="mx-auto" max-width="1000px" outlined :elevation="3">
              <div id="username" class="overline mb-4">USER's NAME</div>
              <v-card-text>
                <div
                  class="text--primary"
                >How do these questions work? Just writing text to try and fill the page</div>
              </v-card-text>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Responses</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card>
                      <v-card-text>This is my comment</v-card-text>
                    </v-card>
                    <v-card>
                      <v-card-text>Don't mind me just commenting on this very very very interesting question</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-card-actions>
                <v-container fluid>
                  <v-textarea
                    id="commentInput"
                    label="Answer Question"
                    clearable
                    clear-icon="x"
                    auto-grow
                    rounded
                    outlined
                    rows="1"
                    dense
                    hide-details
                  ></v-textarea>
                </v-container>
              </v-card-actions>
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
#label {
  padding: 5px;
}
#commentCard {
  width: 100%;
}

#questionCard {
  margin-top: 5px;
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
  margin-top: 20px;
}

@media only screen and (max-width: 1026px) {
  #emptyColumn {
    display: none;
  }
  #tagColumn {
    display: none;
  }

  #askForm {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr auto;
    border-bottom: 2px solid gray;
    padding: 5px;
  }
  #dashboard {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>