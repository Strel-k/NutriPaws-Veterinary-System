const petTypeSelect = document.getElementById('petType');
const breedSelect = document.getElementById('breed');
const breedSelectDiv = document.getElementById('breed-select');
const unspecifiedBreedDiv = document.getElementById('unspecified-breed');

petTypeSelect.addEventListener('change', () => {
    const selectedPetType = petTypeSelect.value;

    if (selectedPetType === 'dog') {
        breedSelect.innerHTML = '';
        breedSelect.innerHTML += '<option value="">Select Breed</option>';
        breedSelect.innerHTML += '<option value="Labrador">Labrador</option>';
        breedSelect.innerHTML += '<option value="German Shepherd">German Shepherd</option>';
        breedSelect.innerHTML += '<option value="Golden Retriever">Golden Retriever</option>';
        breedSelect.innerHTML += '<option value="Shitzu">Shitzu</option>';
        breedSelect.innerHTML += '<option value="Beagle">Beagle</option>';
        breedSelect.innerHTML += '<option value="Bulldog">Bulldog</option>';
        breedSelect.innerHTML += '<option value="French Bulldog">French Bulldog</option>';
        breedSelect.innerHTML += '<option value="Golden Retriever">Golden Retriever</option>';
        breedSelect.innerHTML += '<option value="Dachshund">Dachshund</option>';
        breedSelect.innerHTML += '<option value="Chihuahua">Chihuahua</option>';
        breedSelect.innerHTML += '<option value="Poodle">Poodle</option>';
        breedSelect.innerHTML += '<option value="Siberian Husky">Siberian Husky</option>';




        breedSelectDiv.style.display = 'block';
        unspecifiedBreedDiv.style.display = 'none';
    } else if (selectedPetType === 'cat') {
        breedSelect.innerHTML = '';
        breedSelect.innerHTML += '<option value="">Select Breed</option>';
        breedSelect.innerHTML += '<option value="Siamese">Siamese</option>';
        breedSelect.innerHTML += '<option value="Persian">Persian</option>';
        breedSelect.innerHTML += '<option value="Maine Coon">Maine Coon</option>';
        breedSelect.innerHTML += '<option value="Ragdoll">Ragdoll</option>';
        breedSelect.innerHTML += '<option value="British Shorthair">British Shorthair</option>';

        breedSelectDiv.style.display = 'block';
        unspecifiedBreedDiv.style.display = 'none';
    } else if (selectedPetType === 'Unspecified') {
        breedSelectDiv.style.display = 'none';
    document.getElementById('unspecified-breed').style.display = 'block';
    } else {
        breedSelectDiv.style.display = 'none';
        unspecifiedBreedDiv.style.display = 'none';
    }
});