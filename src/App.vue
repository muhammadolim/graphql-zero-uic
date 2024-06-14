<template>
  <p class="text-center" v-if="loading">loading...</p>
  <div class="grid grid-cols-4" v-for="user in users?.users.data">
    <p class="text-center">{{user.id}}</p>
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
</div>
</template>

<script setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`);

const users = computed(() => result.value);
</script>
