import random
import unicodedata

def normalize_string(s):
    """Convertit la chaîne en minuscules et supprime les accents."""
    return ''.join(
        c for c in unicodedata.normalize('NFD', s.lower())
        if unicodedata.category(c) != 'Mn'
    )

def read_countries_from_file(file_path):
    """Lis les pays et leurs continents d'un fichier et retourne un dictionnaire."""
    countries_dict = {}
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            parts = line.strip().split(',')
            if len(parts) == 2:
                continent, country = parts
                countries_dict[normalize_string(country.strip())] = normalize_string(continent.strip())
    return countries_dict

def get_feedback(guess, answer, countries):
    """Fournit des retours sur le pays deviné par l'utilisateur."""
    feedback = []

    # Vérifier le continent
    if countries[guess] == countries[answer]:
        feedback.append("Vous avez deviné le bon continent.")
    else:
        feedback.append("Mauvais continent.")

    # Vérifier la première lettre
    if guess[0] == answer[0]:
        feedback.append("La première lettre est correcte.")
    else:
        feedback.append("Mauvaise première lettre.")

    # Vérifier la dernière lettre
    if guess[-1] == answer[-1]:
        feedback.append("La dernière lettre est correcte.")
    else:
        feedback.append("Mauvaise dernière lettre.")

    return feedback

def play_game(countries):
    """La fonction principale pour jouer au jeu."""
    # Sélectionner un pays au hasard comme réponse
    answer = random.choice(list(countries.keys()))
    attempts = 0

    while True:
        # Obtenir la supposition de l'utilisateur
        guess = normalize_string(input("Devinez un pays: "))

        # Vérifier si la supposition est dans la liste des pays
        if guess not in countries:
            print("Ce pays n'est pas dans la liste. Essayez encore.")
            continue

        attempts += 1

        # Fournir des retours
        if guess == answer:
            print(f"Félicitations ! Vous avez deviné le pays en {attempts} tentatives.")
            break
        else:
            feedback = get_feedback(guess, answer, countries)
            print(" ".join(feedback))

# Chemin vers le fichier des pays
file_path = 'countries.txt'  # Remplacez par le chemin réel de votre fichier
countries = read_countries_from_file(file_path)

# Décommentez la ligne ci-dessous pour jouer au jeu
play_game(countries)
