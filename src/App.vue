<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light blue--text">MATERIAL DESIGN</span>
      </v-toolbar-title>

      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <v-icon
          slot="activator"
          large
          color="grey"
        >
          list
        </v-icon>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click=""
            :to="{path: item.link}"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-badge left>
          <span slot="badge">6</span>
          <v-icon
            large
            color="grey lighten-1"
          >
            shopping_cart
          </v-icon>
        </v-badge>

        <v-badge color="red">
          <span slot="badge">!</span>
          <v-icon
            large
            color="grey"
          >
            mail
          </v-icon>
        </v-badge>
      </div>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn flat icon color="blue lighten-1" to="/login">
        <v-icon
          large
          color="grey"
        >
        person
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- <HelloWorld/> -->
      <router-view />
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      items: [
        { title: 'Home', link: '/' },
        { title: 'About', link: 'about' },
        { title: 'Animation', link: 'animation' },
        { title: 'Axios', link: 'axios' }
      ],
    }
  }
}
</script>
