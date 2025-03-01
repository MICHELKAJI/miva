import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [NgFor, NgIf, ButtonFlottingComponent],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent implements OnInit {
  isLoading = true;
  services = [
    {
      title: "Car Wash",
      description: "Ce service est la solution idéale pour les sociétés et personnes privées souhaitant assurer un nettoyage professionnel et rapide de leurs véhicules. ce programme se démarque par son professionnalisme et sa rapidité, le nettoyage efficace et complet des véhicules tant à l'intérieur que à l'extérieur, en utilisant des techniques et des produits de pointe.",
      image: "/images/handsome-man-cleaning-house.jpg"
    },
    {
      title: "Home Clean",
      description: "Ce service est spécialisé dans le nettoyage de chantiers pré-habités et de maisons déjà habitée en incluant le nettoyage de tous les contenus de la maison, tels que les meubles, les murs, les plafonds, les matelas, les canapés, etc.., en utilisant des techniques et des produits de pointe pour assurer une propreté optimale.",
      image: "/images/handsome-man-cleaning-house.jpg"
    },
    {
      title: "Nettoyage Meubles",
      description: "Ce service est spécialisé dans le nettoyage complet et efficace des vêtements et la réalisation d'autres travaux domestiques selon les besoins des clients, qu'ils soient une famille, un étudiant ou un célibataire. Toute notre équipe est consciente de son impact environnemental et travaille constamment à réduire la consommation d'eau, d'énergie et de produits chimiques dans ses processus de nettoyage.",
      image: "/images/handsome-man-cleaning-house.jpg"
    },
    {
      title: "Electricité",
      description: "Notre équipe intervient dans l’installation de toutes les installations électriques dans les maisons, en respectant les normes de sécurité et de règles de l’art.",
      image: "/images/handsome-man-cleaning-house.jpg"
    },
    {
      title: "Peinture",
      description: "Nous proposons un service de peinture spécialisé dans la réalisation de peintures intérieures et extérieures pour les clients souhaitant personnaliser et protéger leurs maisons, bâtiments et autres structures.",
      image: "/images/handsome-man-cleaning-house.jpg"
    },
    {
      title: "Pressing",
      description: "Ce service est spécialisé dans l’avantage de vêtements de classe, tels que les vestes, les robes, les sultans, etc., pour les clients souhaitant bénéficier d’un service rapide et professionnel. Ce programme se démarque par son professionnalisme et sa rapidité dans la réalisation des tâches.",
      image: "/images/handsome-man-cleaning-house.jpg"
    }
  ];
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Après 2 secondes, cacher le loader
    }, 2000);
  }
}
