<template>
    <v-sheet style="margin-top: 25%;" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="770" max-height="70%">
        <v-card-title class="text-center text-bold">
          Login Information
        </v-card-title>
        <v-form class="py-6"
          v-model="form"
          @submit.prevent="onSubmit"
        ><v-row>
          <v-col cols="1"></v-col>
          <v-col cols="5">
            <v-text-field
            v-model="fullname"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Fullname"
          ></v-text-field>
  
          <v-text-field
            v-model="age"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Age"
            
          ></v-text-field>
          </v-col>
          <v-col cols="5">
            
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Email"
            
          ></v-text-field>
          <v-text-field
            v-model="contactnum"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Contact Number"
            
          ></v-text-field>
          </v-col>
        </v-row>

  
  
          <br>
  
          <v-btn
          :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Admin
          </v-btn><br>
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Student
          </v-btn>
          
          
        </v-form>
      </v-card>
    </v-sheet>
  </template>

<script>
export default {
  data: () => ({
    form: false,
    fullname: null,
    age: null,
    email: null,
    contactnum: null,
    loading: false,
  }),

  methods: {
    async onSubmit () {
    //   if (!this.form) return
this.loading = true
try {
  this.$store.state.user = { name : this.fullname , age : this.age , email : this.email , contact : this.contactnum }
  this.$router.push('/document')
this.loading = false

} catch (err) {console.log(err);
  
}

      

      
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>