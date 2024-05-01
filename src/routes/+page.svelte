<script>

    import Success from "./success.svelte";

  let cardNumber = '';
  let cardHolder = '';

  let expM = '';
  let expY = '';

  let cvc  = '';

  function formatNumber(event) {
    let value = event.target.value.replace(/\s/g, ''); 

    
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' '; 
      }
      formattedValue += value[i];
    }

    // Formatlanmış değeri sakla
    cardNumber = formattedValue;
  }

  function convertToUpperCase(event) {
    cardHolder = event.target.value.toUpperCase();
  }

  let complete = false;

  let errorText ='';

  function completeFunc() {
    if(cardNumber && cardHolder && expM && expY && cvc){

        if(cardNumber.length == 19) {
            complete = true;
        }else {
            errorText = 'Card code must be 12 characters'
            
        }
       

    }else {
        errorText = 'Do not leave empty space'
    }
  }

</script>



<div class="grid xl:grid-cols-10 h-full">

    <div class="xl:col-span-3  bg-red-500 relative left-area xl:mb-0 mb-14" style="height: 100vh;">
        <div class="bg-image-container">
            <img src="/img/bg-main-desktop.png" alt="">
        </div>
        <div class="card-front">
            <img src="/img/bg-card-front.png" alt="">
            <img src="/img/card-logo.svg" alt="" class="card-logo xl:h-18 h-10">
            <div class="card-bottom-area pl-5 pr-5 pb-3">
                <div class="card-number text-white xl:text-2xl mb-2 ">
                   {#if cardNumber !== '' }
                     {cardNumber}
                   {:else}
                     0000 0000 0000 0000
                   {/if}
                </div>
                <div class="flex justify-between w-full">
                    <div class="name text-white text-sm">
                        {#if cardHolder !== ''}
                            {cardHolder}
                        {:else}
                           JANE APPLESEED
                        {/if}
                    </div>
                    <div class="exp-date text-white text-sm">
                        {#if expM !== '' && expM !== null}
                           {expM}
                        {:else}
                             00
                        {/if}
                        /
                        {#if expY !== '' && expY !== null}
                        {expY}
                        {:else}
                            00
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-back">
            <img src="/img/bg-card-back.png" alt="">
            <div class="cvc text-white">
                {#if cvc !== '' && cvc !== null}
                {cvc}
                {:else}
                    000
                {/if}
            </div>
        </div>
    </div>

    

    <div class=" col-span-7 flex justify-center items-center flex-col xl:p-0 p-3  {complete ? 'hidden' : ''}">

        <div class="card-holder-input flex flex-col mb-4  xl:w-96 w-full">
            <label for="card-holder-input" class="mb-1 text-sm">CARDHOLDER NAME</label>
            <input id="card-holder-input" type="text" class="border border-2 w-full p-2 rounded-xl" bind:value={cardHolder} placeholder="e.g. Jane Appleseed" on:input={convertToUpperCase}>
        </div>

        <div class=" flex flex-col mb-2  xl:w-96 w-full">
            <label for="card-number-input" class="mb-1 text-sm">CARD NUMBER</label>
            <input id="card-number-input" type="text" class="border border-2 w-full p-2 rounded-xl" bind:value={cardNumber} placeholder="e.g. 1234 5678 9123 0000" on:input={formatNumber} maxlength="19"> 
        </div>

        <div class="flex xl:w-96 w-full gap-1 ">

            <div class="exp-date ">
                <label class="mb-1 text-sm">Exp. Date (MM/YY)</label>
                <div class="flex">
                    <input id="card-number-input" type="text" class="border border-2 w-16 p-2 rounded-xl mr-1" bind:value={expM} placeholder="MM" maxlength="2">
                    <input id="card-number-input" type="text" class="border border-2 w-16 p-2 rounded-xl"  bind:value={expY} placeholder="YY" maxlength="2">
                </div>
            </div>
            <div>
                
                <label class="mb-1 text-sm">CVC</label>
                <input id="card-number-input" type="text" class="border border-2 w-full p-2 rounded-xl" bind:value={cvc}  placeholder="123" maxlength="3">
            </div>
            

        </div>

        <div class="error-text text-red-500 mt-3">     
            {errorText}
        </div>

        <button on:click={completeFunc} class="mt-7 bg-[#21092f] hover:bg-[#21092fb0]  text-white xl:w-96 w-full p-4 rounded-lg">Confirim</button>

        
       
    </div>

    <div class=" col-span-7 flex justify-center items-center flex-col xl:p-0 p-3 {complete ? '' : 'hidden'} "> 
        <Success></Success>
    </div>
</div>



<style>

 /* bg image container */

 .bg-image-container {
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
    z-index: 1;
 }

 .bg-image-container img {
    width: 100%;
    height: 100vh;
    
 }


 /* card-front */

 .card-front {
    position: absolute;
    z-index: 9;
    right: -20%;
    top: 15%;
 }

 .card-front .card-logo {
    position: absolute;
    top: 20px;
    left: 20px;
 }

 .card-bottom-area {
    position: absolute;
    bottom: 0;
   
    width: 100%;
 }

/* card back */



.card-back {
    position: absolute;
    z-index: 8;
    right: -35%;
    top: 45%;
 }


.card-back .cvc {
 position: absolute;
 top: 44%;
 right: 15%;
}



@media only screen and (max-width: 1280px) {

    .left-area {
        width: 100vw;
        height: 300px !important;
       
    }

    .left-area .bg-image-container img {
        height: 300px;
    }
    
    .left-area .card-front {
        width: 290px;
        left: 10px;
        top: auto !important;
        bottom: -40px !important;
    }

    .left-area .card-back {
        width: 290px;
        right: 10px;
        top: auto !important;
        top: 40px !important;
        
    }
}


@media only screen and (max-width: 1280px) and (min-width:650px){
    .left-area .card-front {
        width: 290px;
        left: 20%;
        top: auto !important;
        bottom: -40px !important;
    }

    .left-area .card-back {
        width: 290px;
        right: 30%;
        top: auto !important;
        top: 40px !important;
        
    }

}

</style>