<template>
   <v-content>
        <v-layout>
          <v-flex>
            <v-card>
              <v-card-title>
                <div>About</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat flud><router-link to="/about">about</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                Skill
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/skill">skill</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                content
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/content">content</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                Contact
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/contact">contact</router-link></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-content>
 </template>