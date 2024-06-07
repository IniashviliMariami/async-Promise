
  let setTime=new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  setTime
  .then(() => {console.log("Waiting for 1 minute") });


 function madeToy(mytime) {
return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, mytime);
  });
}

madeToy(2000)
  .then(() => {console.log("The toy is made") });


function deliverToys(mytime) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, mytime);
      });
    }
    
    deliverToys(2000)
      .then(() => {console.log("The toy is deliver") });

 function toyShop(mytime){
     return new Promise((resolve)=>{
     setTimeout(()=>{
     resolve();
   },mytime)
  })
 }

 toyShop(1000)
 .then(()=>{console.log("Toy sale")})



 function process(madeToy, deliverToys, toyShop) {
  madeToy(madeToy)
    .then((toy) => {
      return deliverToys(deliverToys);
    })
    .then(() => {
      return toyShop(toyShop

      );
    })
    .then(() => {
      console.log('წარმატებულით შესრულდა');
    })
    .catch((error) => {
      console.error('შეცდომა:', error);
    });
}

process(madeToy, deliverToys, toyShop)



function makeToy(delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject('შეყვანილი დრო არასწორია სათამაშოს დამზადებისთვის');
    } else {
      setTimeout(() => {
        console.log('სათამაშო დამზადებულია');
        resolve('სათამაშო');
      }, delay);
    }
  });
}


function deliverToys(delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject('შეყვანილი დრო არასწორია');
    } else {
      setTimeout(() => {
        console.log('სათამაშოები მიწოდებულია');
        resolve();
      }, delay);
    }
  });
}


function sellToy(delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject('დრო არასწორია ');
    } else {
      setTimeout(() => {
        console.log('სათამაშო გაყიდულია');
        resolve();
      }, delay);
    }
  });
}


async function processToysAsync(makeDelay, deliverDelay, sellDelay) {
  try {
    const toy = await makeToy(makeDelay);
    await deliverToys(deliverDelay);
    await sellToy(sellDelay);
    console.log('ყველა ნაბიჯი წარმატებით შესრულდა');
  } catch (error) {
    console.error('შეცდომა:', error);
  }
}
