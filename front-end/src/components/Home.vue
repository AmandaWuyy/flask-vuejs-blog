<template>
  <div class="container">
    <alert 
      v-for="(alert, index) in alerts" :key="index"
      v-bind:variant="alert.alertVariant"
      v-bind:message="alert.alertMessage">
    </alert>
    <button type="button" class="btn btn-primary">HomePage</button>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Home',  //this is the name of the component
  components: {
    alert: Alert
  },
  data () {
    return {
      alerts: [
        {
          //showAlert: true,
          alertVariant: 'danger',
          alertMessage: 'Oops..'
        },
        {
          //showAlert: true,
          alertVariant: 'info',
          alertMessage: 'Hi'
        },
        {
          //showAlert: true,
          alertVariant: 'success',
          alertMessage: 'OK'
        }
      ]
    }
  }
}
</script>