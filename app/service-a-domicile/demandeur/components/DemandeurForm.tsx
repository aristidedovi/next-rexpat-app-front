// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";

// interface Candidat {
//   nom: string;
//   prenom: string;
//   age: number | null;
//   genre: string;
//   situationMatrimoniale: string;
//   adresse: string;
//   phone: string;
//   avecOuSansEnfant: string;
//   typeDeService: string;
//   frequencePrestation: string;
//   frequenceService: string;
// }

export default function DemandeurForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Formulaire de demandeur
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Remplissez et soumettez le formulaire et notre service client vous
            contactera !
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nom"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Nom{" "}
              </label>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Ex: Fall"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="prenom"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  placeholder="Ex: Fatou"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Age (ans)
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Ex: 25"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="genre"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Genre
              </label>
              <div className="mt-2">
                <select
                  id="genre"
                  name="genre"
                  autoComplete="genre"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="situationMatrimoniale"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Situation matrimoniale
              </label>
              <div className="mt-2">
                <select
                  id="situationMatrimoniale"
                  name="situationMatrimoniale"
                  autoComplete="situationMatrimoniale"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Célibataire">Célibataire</option>
                  <option value="Marié">Marié(e)</option>
                  <option value="Divorcé">Divorcé(e)</option>
                  <option value="Veuve">Veuve / Veuf</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="adresse"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Adresse
              </label>
              <div className="mt-2">
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  placeholder="Ex: Liberté 6"
                  autoComplete="adresse"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Ex: 77 777 77 77"
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="enfant"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Avez vous un ou des enfants
              </label>
              <div className="mt-2">
                <select
                  id="enfant"
                  name="enfant"
                  autoComplete="enfant"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Oui">Oui</option>
                  <option value="Nom">Nom</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="type-service"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Type de service
              </label>
              <div className="mt-2">
                <select
                  id="type-service"
                  name="type-service"
                  autoComplete="type-service"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Ménage">Ménage</option>
                  <option value="Repassage">Repassage</option>
                  <option value="Cuisine">Cuisine</option>
                  <option value="Nounou">Garde d'enfant (Nounou)</option>
                </select>
                {/* <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  /> */}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="frequence-prestation"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fréquence de prestation
              </label>
              <div className="mt-2">
                <select
                  id="frequence-prestation"
                  name="frequence-prestation"
                  autoComplete="frequence-prestation"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Quotidienne">Quotidienne</option>
                  <option value="2/7">2 fois dans la semaine</option>
                  <option value="3/7">3 fois dans la semaine</option>
                  <option value="1/30">1 fois dans le mois</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="frequence-descente"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fréquence de descente
              </label>
              <div className="mt-2">
                <select
                  id="frequence-descente"
                  name="frequence-descente"
                  autoComplete="frequence-descente"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Quotidienne">Quotidienne</option>
                  <option value="2/7">2 fois dans la semaine</option>
                  <option value="3/7">3 fois dans la semaine</option>
                  <option value="1/30">1 fois dans le mois</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Soumettre
        </button>
      </div>
    </form>
  );
}
