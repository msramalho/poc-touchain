<template>
  <v-dialog max-width="900" eager>
    <template v-slot:activator="{ on }">
      <v-btn large outlined v-on="on" class="mr-2">
        {{ $t("instructions.title") }}
        <!-- <v-icon class="pl-2">mdi-information-outline</v-icon> -->
        <!-- <v-icon class="pl-2">mdi-help</v-icon> -->
      </v-btn>
    </template>

    <v-card style="overflow-x: hidden">
      <v-card-title
        class="headline primary text-center"
        primary-title
        style="color: white; display: block"
      >
        <logo />
        <br />
        <span class="font-italic font-bold text-h3">{{
          $t("instructions.motto")
        }}</span>
      </v-card-title>

      <v-card-text class="ma-4 pa-2" style="width: 96%">
        <p
          class="body-1 mb-2 text-center font-weight-medium"
          v-html="$t('instructions.short_description')"
        ></p>
        <p
          class="body-1 text-center"
          v-html="$t('instructions.description')"
        ></p>
      </v-card-text>
      <v-expansion-panels accordion hover popout class="mb-5">
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ $t("instructions.expansion_instructions.title") }}
            <span class="lide text--secondary mr-10 text-right">{{
              $t("instructions.expansion_instructions.question")
            }}</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-2 mt-5 body-2 text-justify">
            <span
              class="lide text--secondary mr-10 text-center"
              v-html="$t('instructions.expansion_instructions.content')"
            ></span>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ $t("instructions.expansion_about.title") }}
            <span class="lide text--secondary mr-10 text-right">{{
              $t("instructions.expansion_about.question")
            }}</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-2 mt-5 body-2 text-justify">
            <span
              class="lide text--secondary mr-10 text-center"
              v-html="$t('instructions.expansion_about.content')"
            ></span>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ $t("instructions.expansion_context.title") }}
            <span class="lide text--secondary mr-10 text-right">{{
              $t("instructions.expansion_context.question")
            }}</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-2 mt-5 body-2 text-justify">
            <span
              class="lide text--secondary mr-10 text-center"
              v-html="$t('instructions.expansion_context.content')"
            ></span>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ $t("instructions.expansion_author.title") }}
            <span class="lide text--secondary mr-10 text-right">{{
              $t("instructions.expansion_author.question")
            }}</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-2 mt-5 body-2 text-justify">
            <span
              class="lide text--secondary mr-10 text-center"
              v-html="$t('instructions.expansion_author.content')"
            ></span>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ $t("instructions.expansion_open_source.title") }}
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-2 mt-5 body-2">
            <span
              class="lide text--secondary mr-10 text-center"
              v-html="$t('instructions.expansion_open_source.content')"
            ></span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.m-title {
  font-size: 1.15em;
}
ul > li > ul > li {
  font-size: 0.8em;
}
.v-expansion-panel-header.v-expansion-panel-header--active {
  background-color: var(--v-primary-base);
  color: white;
  font-size: 1.2em;
}
.v-expansion-panel-header.v-expansion-panel-header--active .lide {
  display: none;
}
.v-expansion-panel-header.v-expansion-panel-header--active .v-icon {
  color: white !important;
}
</style>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: { Logo },
};
</script>
