<template>
  <div class="gallery_container">
    <div class="tabs">
      <button
        v-for="(room, index) in rooms"
        :key="room.name"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ room.name }}
      </button>
    </div>

    <div class="gallery">
      <img
        v-for="(img, i) in rooms[activeTab].images"
        :key="i"
        :src="img"
        class="thumb"
        @click="openLightbox(i)"
      />
    </div>

    <vue-easy-lightbox
      :visible="lightbox"
      :imgs="rooms[activeTab].images"
      :index="lightboxIndex"
      @hide="lightbox = false"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    name: 'GalleryView',
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            activeTab: 0,
            lightbox: false,
            lightboxIndex: 0,
            rooms: [
                {
                    name: 'Pokój 1',
                    images: [
                    require("../assets/muzeum.jpg"),
                    require("../assets/kosciol.jpg"),
                    require("../assets/jezioro1.jpeg"),
                    ],
                },
                {
                    name: 'Pokój 2',
                    images: [
                    '/img/room2/1.jpg',
                    '/img/room2/2.jpg',
                    ],
                },
                {
                    name: 'Pokój 3',
                    images: [
                    '/img/room3/1.jpg',
                    '/img/room3/2.jpg',
                    ],
                },
                {
                    name: 'Pokój 4',
                    images: [
                    '/img/room4/1.jpg',
                    '/img/room4/2.jpg',
                    ],
                },
                {
                    name: 'Pokój 5',
                    images: [
                    '/img/room5/1.jpg',
                    '/img/room5/2.jpg',
                    ],
                },
            ]
        }
    },
    methods: {
        openLightbox(index) {
            this.lightboxIndex = index
            this.lightbox = true
        }
    }
}


</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button.active {
  background-color: #333;
  color: white;
}

.gallery_container {
  padding: 20%;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.gallery {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.thumb {
  width: 150px;
  height: auto;
  cursor: pointer;
  border-radius: 8px;
}
</style>
