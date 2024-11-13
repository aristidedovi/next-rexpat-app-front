import { prisma } from "@/src/lib/prisma";


export default async function handle (req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        const {
            genre,
            situation_matrimoniale,
            nationalite,
            age,
            duree_pays_accueil,
            duree_pays_provenance,
            nombre_enfants,
            pays_accueil,
            pays_provenance,
            quartier,
            region,
            emploiCanaux,
            emploiDevise_revenu,
            emploiEmail,
            emploiEmployeur,
            emploiNiveauDifficulte,
            emploiRevenu_mensuel,
            emploiSecteur,
            emploiSituationProActuelle,
            emploiTypeContrat,
          } = req.body;


        try {
                const data = await prisma.informationGeneral.create({
                data: {
                genre,
                situation_matrimoniale,
                nationalite,
                age: Number(age),
                duree_pays_accueil,
                duree_pays_provenance,
                nombre_enfants: Number(nombre_enfants),
                pays_accueil,
                pays_provenance,
                quartier,
                region,
                emploi: {
                    create: {
                    emploiCanaux,
                    emploiDevise_revenu,
                    emploiEmail,
                    emploiEmployeur,
                    emploiNiveauDifficulte,
                    emploiRevenu_mensuel,
                    emploiSecteur,
                    emploiSituationProActuelle,
                    emploiTypeContrat,
                    },
                },
                },
            });
            //res.status(201).json(ig)
            res.status(200).json({ message: 'Data created successfully', data });
        } catch (error) {
            console.error('Error creating record:', error);
            res.status(500).json({ error: 'Error creating recod' })
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }





}