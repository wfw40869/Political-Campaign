const campaign = {
    district: "TN-05",
    platformStatements: {
        taxes: "Tax people enough to fund important things, but not too much that they can't afford air",
        jobs: "We're doing pretty solid right now so keep on keeping on",
        infrastructure: "Traffic is getting bad in Nashville, but it's nothing compared to other major cities",
        healthCare: "Socialize it already",
        crime: "De-criminalize mmarijuana and pardon people in jail on marijuana crimes"
    },
    donationFormURL: "https://www.donation-form-url.com",
    eventCalendar: [
        {
            dateOfEvent: "07/17/2019",
            eventInfo: {
                city: "Nashville",
                state: "TN",
                locationDescription: "Centennial Park",
                startTime: "15:00CT",
                endTime: "18:00CT",
                eventDescription: "Rally to legalize recreational marijuana"
            }
        }
    ],
    volunteers: [],
    addVolunteer: function (volunteer) {
        this.volunteers.push(volunteer)
    },
    bio: "I like turtles",
    imageGallery: [
        {
            imageURL: "https://vignette.wikia.nocookie.net/villains/images/1/1e/Will-Ferrell-in-The-Campaign-2012-Movie-Character-Poster.jpg/revision/latest?cb=20121117035354",
            imageType: "head shot"
        },
        {
            imageURL: "https://www.bostonherald.com/wp-content/uploads/migration/2012/08/06/7f575f_080612campaign6.jpg?w=535",
            imageType: "Family"
        }
    ],
    missionStatement: "The rent is too damn high!",
    voterRegistrationLink: "https://www.voter-registration.com",
    addToImageGallery: function (imageObj) {
        this.imageGallery.push(imageObj)
    },
    changeBiography: function (textToReplaceBio) {
        this.bio = textToReplaceBio
    },
    changePlatform: function (topic, newPlatformStatement) {
        this.platformStatements[topic] = newPlatformStatement
    }

}

const constituentImageObj = {
    imageURL: "https://pbs.twimg.com/profile_images/1016193596259749888/m7b1dQNo_400x400.jpg",
    imageType: "Constituents"
}

campaign.addToImageGallery(constituentImageObj)
campaign.changeBiography("Cam Brady 2012!!!!")
campaign.changePlatform("taxes", "Taxes are the backbone of America!")
console.table(campaign)
