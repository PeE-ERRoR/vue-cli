<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form v-on:submit.prevent="login">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-btn
                      slot="activator"
                      :href="source"
                      icon
                      large
                      target=""
                      v-on:click="dialog = true"
                    >
                      <v-icon large>account_circle</v-icon>
                    </v-btn>
                    <span>Register</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-text-field prepend-icon="email" name="username" v-model="form.username" label="Email" type="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" v-model="form.password" label="Password" type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>

          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Register</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Legal first name*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Password*" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="primary"  @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      drawer: null,
      form: {},
      info: {},
      dialog: false
    }),
    props: {
      source: String
    },
    methods: {
      login() {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            this.info = response.data.bpi
            console.log(this.info)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    },
    actions: {

    },
  }
</script>
