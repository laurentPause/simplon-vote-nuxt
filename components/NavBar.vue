<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <nuxt-link to="/" class="text-light ">
          Simplon Vote
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            Créer un sujet
          </b-nav-item>
          <b-nav-item>
            Résultat
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link to="/login" class="text-light ">
              Connexion
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/register" class="text-light ">
              Inscription
            </nuxt-link>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
