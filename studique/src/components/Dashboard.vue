<template>
  <div>
    <div id="dashboard">
      <div id="tagColumn"></div>
      <div>
        <div id="askForm">
          <v-container fluid>
            <v-textarea
              label= "Ask A Question"
              id ="questionTextArea"
              v-model="question"
              clearable
              clear-icon="x"
              auto-grow
              rounded
              outlined
              rows="1"
            ></v-textarea>
          </v-container>
          <v-btn color="primary" id="askButton" @click.native="yourButtonHandler">Ask</v-btn>
        </div>
        <v-divider></v-divider>
        <div id="cards">
          <v-list-item v-for="(myQuestion,pos) in myQuestion" :key="pos">
            <v-card class="questionCard" max-width="1000px" outlined :elevation="3">
              <v-card-subtitle id="username">USER's NAME</v-card-subtitle>
              <v-card-text>
                <div
                  class="text--primary"
                >{{myQuestion.question}}</div>
              </v-card-text>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Responses</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card>
                      <v-container>
                        <v-card-subtitle id="username">USER's NAME</v-card-subtitle>
                        <v-card-text>This is my comment</v-card-text>
                      </v-container>
                    </v-card>
                    <v-card>
                      <v-container>
                        <v-card-subtitle id="username">USER's NAME</v-card-subtitle>
                        <v-card-text>Don't mind me just commenting on this very very very interesting question</v-card-text>
                      </v-container>
                    </v-card>
                    <v-card-actions>
                      <v-container fluid>
                        <v-textarea
                          v-model="commentInput"
                          label="Answer Question"
                          clearable
                          clear-icon="x"
                          auto-grow
                          rounded
                          outlined
                          rows="1"
                          dense
                          hide-details
                          v-bind:id="myQuestion.mykey"
                        ></v-textarea>
                      </v-container>
                      <v-btn color="primary"  @click="addComment(myQuestion.mykey)">Respond</v-btn>
                    </v-card-actions>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-list-item>
        </div>
      </div>
      <div id="emptyColumn"></div>
    </div>
  </div>
</template>

<script>
import { AppDB } from "../db-init.js";

export default {
  data: function() {
    return {
      question: "",
      comment: "",
      commentInput: "",
      myQuestion: []
    };
  },
  methods: {
    yourButtonHandler() {
      AppDB.ref("posts")
        .push()
        .set({
          question: this.question
        });
    },

    fbAddHandler(snapshot) {
      const item = snapshot.val();
      this.myQuestion.push({ ...item, mykey: snapshot.key });
    },
    fbRemoveListener(snapshot) {
      /* snapshot.key will hold the key of the item being REMOVED */
      this.myQuestion = this.myQuestion.filter(z => z.mykey != snapshot.key);
    },
    remove() {
      this.userSelections.forEach(victimKey => {
        AppDB.ref("posts")
          .child(victimKey)
          .remove();
      });
    },
    addComment(questionID) {
      AppDB.ref("posts")
        .child(questionID)
        .push()
        .set({
          comment: this.commentInput
        });
    }
  },
  mounted() {
    AppDB.ref("posts").on("child_added", this.fbAddHandler);
    AppDB.ref("posts").on("child_removed", this.fbRemoveListener);
  },
  beforeDestroy() {
    AppDB.ref("posts").off("child_added", this.fbAddHandler);
    AppDB.ref("posts").off("child_removed", this.fbRemoveListener);
  }
};
</script>

<style scoped>
#askQuestion {
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 6fr 1fr;
}
#label {
  padding: 5px;
}
#commentCard {
  width: 100%;
}

.questionCard {
  margin-top: 5px;
  width: 98%;
}

#username {
  padding: 5px;
}

#questionTextArea {
  width: 100%;
}

#dashboard {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}

#askForm {
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr auto;
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