const { Iphone } = require('./models');


Iphone.create({
    name: '13',
    model: 13,
    color: 'Orange',
    price: 1100,
    productInfo: 'Iphone 13 orange color',
    size: 'Standard',
    storePickupOption: 'Yes'
})
    .then(function (phoneCreated) {
        console.log('phone that was created', phoneCreated.toJSON());
    })
    .catch(function (error) {
        console.log(error);
    });


//Update
Iphone.update({
    color: 'Yellow',
    productInfo: 'Iphone 11 yellow color',
    price: 1150
}, {
    where: {
        model: 11
    }

})
    .then(function (rowChanged) {
        console.log('changeAttr', rowChanged);
    })
    .catch(function (error) {
        console.log(error);
    });


// Read one

Iphone.findOne({
    where: { color: 'Blue' }
})
    .then(function (foundPhone) {
        console.log('finding a phone', foundPhone);
    })
    .catch(function (error) {
        console.log(error);
    });


//Find or Create

Iphone.findOrCreate({
    where: {
        size: 'Mini',

    },
    defaults: { color: 'Blue' }
})
    .then(function (Iphone) {
        console.log(Iphone);
    })
    .catch(function (error) {
        console.log(error);
    })