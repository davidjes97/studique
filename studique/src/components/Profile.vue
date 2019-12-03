<template>
  <div id="userProfile">
    <!-- <p>{{AppAUTH.currentUser.displayName}}</p> -->
    <div id="dashboard">
      <div id="tagColumn"></div>
      <div>
        <div id="cards">
          <v-list-item v-for="(myQuestion,pos) in myQuestion.slice().reverse()" :key="pos">
            <v-card v-if="myQuestionID(myQuestion.userId)" class="questionCard" outlined :elevation="3">
              <v-card-subtitle id="username">
                {{myQuestion.user}}
                <v-btn
                  v-if="myQuestionID(myQuestion.userId)"
                  color="red"
                  id="deleteButton"
                  @click="deletePost(myQuestion.mykey)"
                  small
                  icon
                  rounded
                  right
                >X</v-btn>
              </v-card-subtitle>

              <v-card-text>
                <div class="text--primary">{{myQuestion.question}}</div>
              </v-card-text>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Responses</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item v-for="(myComment, pos) in myQuestion.comments" :key="pos">
                      <v-card id="commentCard">
                        <v-card-subtitle id="commentUser">{{myComment.user}}</v-card-subtitle>
                        <v-card-text>
                          <div class="text--primary">{{myComment.comment}}</div>
                        </v-card-text>
                      </v-card>
                    </v-list-item>
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
                      <v-btn color="primary" @click="addComment(myQuestion.mykey)">Respond</v-btn>
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
import { AppDB, AppAUTH } from "../db-init.js";

export default {
  data: function() {
    return {
      question: "",
      commentInput: "",
      myQuestion: [],
      myComment: []
    };
  },
  methods: {
    askButton() {
      if (this.question != "") {
        AppDB.ref("posts")
          .push()
          .set({
            userId: AppAUTH.currentUser.uid,
            user: AppAUTH.currentUser.displayName,
            question: this.question
          });
      }
    },

    fbAddHandler(snapshot) {
      const item = snapshot.val();
      this.myQuestion.push({ ...item, mykey: snapshot.key });
    },
    fbRemoveListener(snapshot) {
      /* snapshot.key will hold the key of the item being REMOVED */
      this.myQuestion = this.myQuestion.filter(z => z.mykey != snapshot.key);
    },
    deletePost(questionKey) {
      if (confirm("Remove this question?")) {
        AppDB.ref("posts")
          .child(questionKey)
          .remove();
      }
    },
    addComment(questionID) {
      if (this.commentInput != "") {
        AppDB.ref("posts")
          .child(questionID)
          .child("comments")
          .push()
          .set({
            user: AppAUTH.currentUser.displayName,
            comment: this.commentInput
          });
      }
    },
    myQuestionID(questionUID) {
      if (questionUID == AppAUTH.currentUser.uid) return true;
      else return false;
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

@media only screen and (max-width: 600px) {
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
    position: sticky;
    top: 0;
  }
  #dashboard {
    display: grid;
    grid-template-columns: auto;
  }
  #deleteButton {
    justify-content: right;
  }
}
</style>
