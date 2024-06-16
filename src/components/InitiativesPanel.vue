<template>
  <div v-for="initiative in initiatives" :key="initiative.id" class="initiative">
    <img :src="initiative.imageUrl" :alt="initiative.alt" />
    <h2>{{ initiative.name }}</h2>
    <h3>{{ initiative.blurb }}</h3>
    <p>{{ initiative.description }}</p>
    <a :href="initiative.link" target="_blank">Visit Website</a>
  </div>
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
            };
          })
        );
        initiatives.value = initiativeData;
      } catch (e) {
        console.error('Error fetching documents: ', e);
      }
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData();
    });

    return {
      initiatives,
    };
  },
});
</script>

<style scoped>
  .initiative {
    margin: 100px auto 100px auto;
    width: 50%;
  }

  .initiative img {
    width: 15%;
    height: auto;
  }
</style>
