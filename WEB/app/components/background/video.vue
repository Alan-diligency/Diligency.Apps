<template>
    <div class="absolute top-0 left-0 size-full z-0" v-if="IsLinkVideo">
        <video class="size-full object-cover" autoplay muted loop playsinline>
            <source :src="props.link" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
    <div class="absolute top-0 left-0 size-full z-0" v-if="IsLinkImage">
        <img v-if="props.link" :src="props.link" class="size-full object-cover" />
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script setup lang="ts">

enum LinkType {
    image,
    video
}

const videoExtensions = [
    "mp4",
    "webm",
    "ogg",
    "ogv",
    "mov",
    "m4v",
    "avi",
    "mkv",
    "wmv",
    "flv",
    "f4v",
    "3gp",
    "3g2"
];

const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif",
    "bmp",
    "svg",
    "tiff",
    "tif",
    "ico",
    "avif",
    "heic",
    "heif"
];

const IsLinkImage = computed((): boolean => {
    var ext = props?.link?.split('.').pop()?.toLowerCase() || "";
    return imageExtensions.includes(ext)
})

const IsLinkVideo = computed((): boolean => {
    var ext = props?.link?.split('.').pop()?.toLowerCase() || "";
    return videoExtensions.includes(ext)
})

const props = defineProps({
    link: {
        required: false,
        type: String,
    },
})

</script>