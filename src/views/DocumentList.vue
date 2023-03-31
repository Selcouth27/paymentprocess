<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1" md="1"></v-col>
        <v-col cols="5" md="5" style="margin-top:10%">
          <v-card
          
            class="mx-auto pa-4 rounded-xl rounded-be-xl"
            width="100%"
            height="100%"
            shaped
            raised
          >
            <v-card-title> Documents </v-card-title>
           <v-row>
            <v-col cols="6">
                
                <v-checkbox   class="text-no-wrap"
                    v-model="certLetterForm"
                    :label="this.certLetterForm ? ' Certification (Letter Form) -- P 150' :'Certification (Letter Form)'">

                </v-checkbox>
                <v-checkbox class="text-no-wrap"
                    v-model="certAuthentication"
                    :label="this.certAuthentication ? 'Certification Authentication -- P 150':'Certification Authentication'"
                    >

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certGoodMoral"
                    :label="this.certGoodMoral ? 'Certification Good Moral -- P 150':'Certification Good Moral'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certCompletion"
                    :label="this.certCompletion ? 'Certification of Completion -- P 150': 'Certification of Completion'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="diploma"
                    :label="this.diploma ? 'Diploma -- P 200' :'Diploma'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="aceForm"
                    :label="this.aceForm ?  'Ace Form -- P 0' :'Ace Form'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="roForm"
                    :label=" this. roForm ? 'RO Form -- P 0':'RO Form'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="torNonEngGrad"
                    :label="this.torNonEngGrad ? 'Transcript of Records (Non Engineering Graduate) -- P 350'
                    :'Transcript of Records (Non Engineering Graduate)'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="torEngGrad"
                    :label="this.torEngGrad ? 'Transcript of Records (Engineering Graduates) -- P 450':'Transcript of Records (Engineering Graduates)'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certEnrollment"
                    :label="this.certEnrollment ? 'Certificate of Enrollment/No Tuition Fee -- P 0':'Certificate of Enrollment/No Tuition Fee'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="othersReason"
                    :label=" this.othersReason ?  'Others (Reason) -- P 0':'Others (Reason)'">

                </v-checkbox>
             
            
            </v-col>
            <v-col cols="6">

                <v-checkbox class="text-no-wrap"
                    v-model="torPerPage"
                    :label="this.torPerPage ?  'Transcript of Records per page (Non-Graduate, All Courses) -- P 100':'Transcript of Records per page (Non-Graduate, All Courses)'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="scanPicture"
                    :label="this.scanPicture ? 'Scanned Picture -- P 50': 'Scanned Picture'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certUnitEarned"
                    :label="this.certUnitEarned ?  'Certificate of Units Earned -- P 0':'Certificate of Units Earned'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certGraduation"
                    :label="this.certGraduation ?  'Certification of Graduation -- P 600':'Certification of Graduation'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="honorableDismissal"
                    :label="this.honorableDismissal ? 'Honorable Dismissal -- P 0':'Honorable Dismissal'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certNoId"
                    :label="this.certNoId ?  'Certification of No. ID -- P 0':'Certification of No. ID'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="copyOfGrades"
                    :label="this.copyOfGrades ?`Copy of Grades Certificate of General Weighted Average (GWA) -- P 0` : `Copy of Grades Certificate of General Weighted Average (GWA)`">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certNstp"
                    :label=" this.certNstp ? 'Certificate of NSTP Serial Number -- P 0': 'Certificate of NSTP Serial Number'">

                </v-checkbox>
                <v-checkbox   class="text-no-wrap"
                    v-model="certSubjectDesc"
                    :label="this.certSubjectDesc ? 'Certificate of Subject Description -- P 0':'Certificate of Subject Description'">

                </v-checkbox>
           
                <v-checkbox   class="text-no-wrap"
                    v-model="certRegistration"
                    :label="this.certRegistration ? 'Certificate of Registration -- P 0':'Certificate of Registration'">

                </v-checkbox>
                <v-text-field
                
                v-model="reasonText"
                
                label="Reason"
                variant="underlined"
              ></v-text-field>
              
            
            </v-col>
       
           </v-row>
            
          </v-card>
        </v-col>
        
        <v-col cols="4" md="4" class="mx-auto" style="margin-top: 25%;">
          <v-row>
            <v-col cols="12">
              <v-card
                class="mx-auto pa-4 rounded-xl rounded-be-xl"
                max-width="100%"
                max-height="100%"
                shaped
                raised
              >
                <v-card-title> User Information</v-card-title>
  
                <v-card-text>
                  <v-container fluid>
                    <v-row class="text-center">
                      <v-col cols="6">
                        <span>Name :</span>
                     
                      </v-col>
                      <v-col cols="6">
                        <span>{{ this.theData.name ? this.theData.name : ''}}</span>
                      </v-col>
                      <v-col cols="12"></v-col>
                      <v-col cols="6">
                        <span>Age :</span>
                      </v-col>
                    
                      <v-col cols="6">
                        <span>{{this.theData.age ? this.theData.age : ''}}</span>
                      </v-col>
                        <v-col cols="12"></v-col>
                      <v-col cols="6">
                        <span>Email :</span>
                      </v-col>
                      <v-col cols="6">
                        <span>{{this.theData.email ? this.theData.email : ''}}</span>
                      </v-col>
                      <v-col cols="12"></v-col>
                      <v-col cols="6">
                        <span>Contact No :</span>
                      </v-col>
                      <v-col cols="6">
                        <span>{{this.theData.contact ?this.theData.contact : ''}}</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          <v-col cols="1" md="1"></v-col>
          </v-row>
          <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
              <v-btn
                block
                class="mb-4 rounded-xl rounded-be-xl"
                color="white"
                size="x-large"
                variant="flat"
                @click="cancelButton()"
              >
                C A N C E L
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn

                block
                class="mb-4 rounded-xl rounded-be-xl"
                color="red"
                size="x-large"
                variant="flat"
                @click="submitButton()"

              >
                P R O C E E D
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>



<!-- ============================================== -->
<!-- ============DIALOG FOR RECEIPT================== -->

    <v-container>
      <template>
    <v-row justify="center">
      <v-dialog
        v-model="documentListDialog"
        persistent
        :scrim="false"
      transition="dialog-bottom-transition"
        width="70%"
      >
    

        <v-toolbar
          dark
          color="orange"
        >
          <v-btn
            icon
            dark
            @click="closeDocumentListDialog()"
          >
            <v-icon >mdi-close</v-icon>
          </v-btn>
          
          <v-spacer></v-spacer>
          <v-btn
          v-if="this.totalAmount
          "
              variant="text"
              @click="payUsingGcash()"
            >
              Pay with GCASH
            </v-btn>
        </v-toolbar>
      
      <v-card  
        
      

        class="py-3 px-3 my-8 mx-8">
          <v-card-title class="text-h5 mb-5">
            Educational Assistance
          </v-card-title>

          
  
  
    <v-row>
      <v-col cols="8">Description</v-col>
      <v-col cols="4"> Unit Price</v-col>
    </v-row>
    
    
      <v-row   v-for="item in documentListArray"
        :key="item.name"
        
        >    
          <v-col cols="8" md="8">{{ item.name }}</v-col>
        <v-col cols="4">{{ item.value }}</v-col>
      </v-row>
  
      
    
  
  
    <v-row>

      <v-col cols="12"></v-col>
      <v-col cols="12"></v-col>
      <v-col cols="8" class="text-center" style="background-color: orange;">TOTAL </v-col>
      <v-col cols="4" style="background-color: orange;">{{  this.totalAmount }}</v-col>
      
      <v-col cols="12"></v-col>

    </v-row>
  
  
 
          <v-card-text class="text-center">
          Transaction Link :   <a href=" https://smarttransaction.com/coe"> https://smarttransaction.com/coe</a>
          </v-card-text>
        </v-card>


     
     

      </v-dialog>
    </v-row>
  </template>

    </v-container>



    <!-- ================================= -->

                          <v-container>
                            <template>



                          <v-row justify="center">
                            <v-dialog
                              v-model="gcashQrDialog"
                              
                              
                              persistent
                              max-width="70%"
                              :scrim="false"
                        transition="dialog-top-transition"
                            >
                            <v-toolbar
                              class="mb-8"
                                  dark
                                  color="orange"
                                >
                                  <v-btn
                                    icon
                                    dark
                                    @click="closeGcashQrDialog()"
                                  >
                                    <v-icon >mdi-close</v-icon>
                                  </v-btn>
                                  
                        
                                </v-toolbar>
                            <v-card
                          class="mx-auto py-6 px-6"
                          width="70%"
                          >
                            

                            <v-row>
                              <v-col cols="6">


                                      <v-img
                                src="../assets/qrniKoya.PNG"
                                height="400px"
                                width="400px"
                                cover
                                ></v-img>

                              </v-col>
                              <v-col cols="6">
                                <v-card-title>
                          Pay Using Gcash QR Code
                          </v-card-title>

                          <v-card-subtitle>
                          Fast and Convenient Cash Less Payment!
                          </v-card-subtitle>


                          <!-- <v-expand-transition>
                          <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                              I'm a thing. But, like most politicians, he promised more than he 
                              could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll\
                              be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that
                                or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                          </div>
                          </v-expand-transition> -->
                          <v-row>
                              <v-col cols="8">Description</v-col>
                              <v-col cols="4"> Unit Price</v-col>
                            </v-row>
                            
                            
                              <v-row   v-for="item in documentListArray"
                                :key="item.name"
                                
                                >    
                                  <v-col cols="8" md="8">{{ item.name }}</v-col>
                                <v-col cols="4">{{ item.value }}</v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="8" class="text-center" >TOTAL </v-col>
                              <v-col cols="4" >{{  this.totalAmount }}</v-col>
                              </v-row>
                              </v-col>
                            </v-row>
                          </v-card>


                            </v-dialog>
                          </v-row>
                            
                            </template>
                          </v-container>






                          
  </template>
  
  
  <script>


  export default {
    computed: {},
    data() {
      return {
        theData :{},
        gcashQrDialog : false,
        documentListDialog : false,
        resultDialog: false,
        certLetterForm: false,    
        certAuthentication: false,
        certGoodMoral: false,
        certCompletion: false,
        diploma: false,
        aceForm: false,
        roForm: false,
        torNonEngGrad: false,
        torEngGrad: false,    
        certEnrollment: false,
        othersReason: false,
        torPerPage: false,
        scanPicture: false,
        certUnitEarned: false,
        certGraduation: false,
        honorableDismissal: false,
        certNoId: false,
        copyOfGrades: false,
        certNstp:false,
        certSubjectDesc: false,
        certRegistration:false,
        sumProduct: 0,
        documentListArray : [],
        totalAmount : 0,
        reasonText:null,
      };
    },
    
     created:async function(){
const newDt = await this.$store.state.user
this.theData = newDt


    },
    
    watch: {


    },
    methods: {
      async submitButton () {
  this.certLetterForm == true  ?  this.documentListArray.push({ name : 'Certification (Letter Form)' , value : 150}) : ''
 this.certAuthentication == true  ?  this.documentListArray.push({ name : 'Certification Authentication' , value : 150}) : ''
 this.certGoodMoral == true  ?  this.documentListArray.push({ name : 'Certification Good Moral' , value : 150}) : ''
 this.certCompletion == true  ?  this.documentListArray.push({ name : 'Certification of Completion' , value : 150}) : ''
  this.diploma == true  ?  this.documentListArray.push({ name : 'Diploma' , value : 200}) : ''
  this.aceForm == true  ?  this.documentListArray.push({ name : 'Ace Form' , value : 0}) : ''
 this.roForm == true  ?  this.documentListArray.push({ name : 'RO Form' , value : 0}) : ''
  this.torNonEngGrad == true  ?  this.documentListArray.push({ name : 'Transcript of Records (Non Engineering Graduate)' , value : 350}) : ''
 this.torEngGrad == true  ?  this.documentListArray.push({ name : 'Transcript of Records (Engineering Graduates)' , value : 450}) : ''
  this.certEnrollment == true  ?  this.documentListArray.push({ name : 'Certificate of Enrollment/No Tuition Fee' , value : 0}) : ''
 this.othersReason == true  ? this.reasonText ? this.documentListArray.push({ name : `Others , Reason : ${this.reasonText}` , value : 0}) : this.documentListArray.push({ name : `'Others (Reason)'` , value : 0}) : ''
this.torPerPage == true  ?  this.documentListArray.push({ name : 'Transcript of Records per page (Non-Graduate, All Courses)' , value : 100}) : ''
  this.scanPicture == true  ?  this.documentListArray.push({ name : 'Scanned Picture' , value : 50}) : ''
  this.certUnitEarned == true  ?  this.documentListArray.push({ name : 'Certificate of Units Earned' , value : 0}) : ''
 this.certGraduation == true  ?  this.documentListArray.push({ name : 'Certification of Graduation' , value : 600}) : ''
 this.honorableDismissal == true  ?  this.documentListArray.push({ name : 'Honorable Dismissal' , value : 0}) : ''
  this.certNoId == true  ?  this.documentListArray.push({ name : 'Certification of No. ID' , value : 0}) : ''
  this.copyOfGrades == true  ?  this.documentListArray.push({ name : 'Copy of Grades Certificate of General Weighted Average (GWA)' , value : 0}) : ''
  this.certNstp == true  ?  this.documentListArray.push({ name : 'Certificate of NSTP Serial Number' , value : 0}) : ''
 this.certSubjectDesc == true  ?  this.documentListArray.push({ name : 'Certificate of Subject Description' , value : 0}) : ''
  this.certRegistration == true  ?  this.documentListArray.push({ name : 'Certificate of Registration' , value : 0}) : ''
        this.$store.state.documentList =  this.documentListArray
        

        const  value =  this.documentListArray
        // this.totalAmount += 
        let finalTotal = 0
        try {
            const totalSales = value.forEach((item)=>{
              finalTotal +=  parseInt(item.value)
            })
        } catch (err) {
          console.error(err)
        }
        
        this.totalAmount = finalTotal
        this.documentListDialog = true;
      },

      
    async  cancelButton() {
      this.$store.state.documentList = null
      this.documentListArray = [];
      this.certLetterForm =false
      this.certAuthentication =false
this.certGoodMoral =false
this.certCompletion=false
this.diploma =false
this.aceForm =false
this.roForm=false
this.torNonEngGrad=false
this.torEngGrad =false
 this.certEnrollment=false
this.othersReason =false
this.torPerPage =false
 this.scanPicture=false
this.certUnitEarned =false
this.certGraduation=false
this.honorableDismissal=false
 this.certNoId=false
 this.copyOfGrades =false
this.certNstp =false
this.certSubjectDesc=false
this.certRegistration =false

        
        
        // return Store.state.cancelBtn('hehe')
       
        // store
      
        // this.resultDialog = true;
        // const sumProd = this.prod1Val + this.prod2Val;
        // this.sumProduct = sumProd;
        // console.log(sumProd);
      },
      async closeDocumentListDialog(){
        
        await this.cancelButton();
        this.documentListDialog = false
      },
      async closeGcashQrDialog(){        
        await this.cancelButton();
        this.gcashQrDialog = false
      },
      async payUsingGcash(){
        console.log(this.$store.state);
        
        this.documentListDialog = false
        this.gcashQrDialog = true
      
        
      }
      
    },
  };
  </script>
  






      <!-- <v-container>
                    <v-item-group v-model="docuList" multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="(item , i ) in documentList"
          :key="i"
          cols="12"
          md="6"
        >
          <v-item v-model="documentItem" v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'red' : ''"
              class="d-flex align-center"
              dark
              height="50"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  class="text-h3 flex-grow-1 text-center"
                >
                  {{ isSelected ? item.value
                   : item.text }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
                </v-container>
           -->