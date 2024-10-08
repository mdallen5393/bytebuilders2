<template>
  <section id="initiatives" aria-labelledby="initiatives-heading">
    <h1 class="initiatives-heading">What we do</h1>
    <div v-for="initiative in initiatives" :key="initiative.id" class="initiative">
      <div class="initiative__content">
        <img :src="initiative.imageUrl" :alt="initiative.alt" />
        <h2>{{ initiative.name }}</h2>
        <h3>{{ initiative.blurb }}</h3>
        <div v-html="getDescription(initiative)"></div>
        <div class="more-less">
          <a v-if="shouldShowMoreButton(initiative)" @click="toggleDescription(initiative.id)">
            {{ initiative.showFullDescription ? '&#8648; See Less &#8648;' : '&#8650; See More &#8650;' }}
          </a>
        </div>
        <br>
        <a class="visit-button" :href="initiative.link" target="_blank" :aria-label="'Visit ' + initiative.name + ' website'">Visit Website</a>

      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, inject, ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

export default defineComponent({
  name: 'InitiativesPanel',
  setup() {
    const db = inject('db');
    const storage = inject('storage');
    const initiatives = ref([])

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'initiatives'));
        const initiativeData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            // retrieve imageUrl from firebase storage using its filename
            const imageUrl = await getDownloadURL(storageRef(storage, data.image));
            return {
              id: doc.id,
              ...data,
              imageUrl,
              showFullDescription: false, // Field to track if the full description is shown
            };
          })
        );
        // Sort initiatives based on the 'order' field
        initiatives.value = initiativeData.sort((a, b) => a.order - b.order);
      } catch (e) {
        console.error('Error fetching documents: ', e);
      }
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData();
    });

    const toggleDescription = (id) => {
      const initiative = initiatives.value.find((i) => i.id === id);
      if (initiative) {
        initiative.showFullDescription = !initiative.showFullDescription;
      }
    };

    const getDescription = (initiative) => {
      const fullDescription = initiative.description;
      if (initiative.showFullDescription || fullDescription.length <= 500) {
        return fullDescription;
      }
      return `${fullDescription.slice(0, 500)}...`;
    };

    const shouldShowMoreButton = (initiative) => {
      return initiative.description.length > 500;
    };

    return {
      initiatives,
      toggleDescription,
      getDescription,
      shouldShowMoreButton,
    };
  },
});
</script>

<style scoped>
  .initiative {
    position: relative;
    padding: 20px;
    z-index: 1;
    margin: 0 auto 100px auto;
    width: 50%;
  }

  .initiative__content {
    position: relative;
    background-color: white;
    z-index: 1;
    padding: 20px;
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
  }

  .initiative::before,
  .initiative::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  .initiative::before {
    top: 30px;
    left: 30px;
    right: 0px;
    bottom: 0px;
    border: 5px solid var(--color-blue);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(-2deg);
  }

  .initiative::after {
    top: 0px;
    left: 0px;
    right: 30px;
    bottom: 30px;
    border: 5px solid var(--color-orange);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(2deg);
  }

  .initiative img {
    width: 20%;
    min-width: 100px;
    height: auto;
  }

  .initiatives-heading {
    font-size: 2em;
    margin: 50px;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    .initiative {
      width: 80%;
    }
    .initiative__content p {
      text-align: justify;
    }
  }

  .more-less {
    color: var(--color-blue);
    position: relative;
  }

  .more-less:hover {
    cursor: pointer;
  }

  .visit-button {
    width: 20%;
    padding: 20px;
    text-decoration: none;
    color: black;
    border: 1px solid gray;
    border-radius: 5px;
    background: none;
    display: block;
    margin: auto auto;
  }


  .visit-button:hover {
    color: #05a2e5;
    border-color: #05a2e5;
    background-color: #d9e9e9;
  }

  .visit-button:active {
    color: var(--color-orange);
    border-color: var(--color-orange);
    background-color: #ffe3cf;
  }

  @media (max-width: 768px) {
    .visit-button {
      width: 50%;
    }
  }
</style>
