<template>
    <TableParent :data="data" :excluded-keys="['_key']" />
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
const data = {
    title: [
        {
            _key: uuidv4(),
            fr: "Soumettre mon projet",
            en: "Apply my project"
        }
    ],
    subtitle: [
        {
            _key: uuidv4(),
            fr: "Partagez votre idée ou projet avec notre équipe d’experts. Nous vous accompagnons dans l’analyse, la conception et le développement de solutions digitales sur-mesure. Que ce soit pour une application, une plateforme ou un outil intelligent, soumettre votre projet est la première étape pour le concrétiser rapidement et efficacement.",
            en: "Share your idea or project with our team of experts. We assist you in the analysis, design, and development of custom digital solutions. Whether it's for an application, a platform, or an intelligent tool, submitting your project is the first step to bring it to life quickly and efficiently."
        }
    ],
    buttons: {
        begin: {
            fr: "Commencer",
            en: "Begin"
        },
        next: {
            fr: "Suivant",
            en: "Next"
        },
        previous: {
            fr: "Précédent",
            en: "Previous"
        }
    }
}

</script>