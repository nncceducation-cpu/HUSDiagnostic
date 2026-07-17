// Example ultrasound images shown for each final diagnosis.
// Captions reproduced verbatim from the original app (assets_images_appendixNcontent.png).
// image1..image7 map to /appendices/appendix1..7.png.

export interface ResultImage {
  src: string;
  caption: string;
}

export const RESULT_IMAGES: Record<string, ResultImage> = {
  image1: {
    src: './appendices/appendix1.png',
    caption:
      'Image 1. Ultrasound scan in a preterm infant (GA 26 weeks) shows the common pattern of Grade I GMH-IVH. (A) Coronal scan at the level of the frontal horns of the lateral ventricles. (B) Parasagittal scan through the right lateral ventricle. The location of the small echogenic clot (arrows) at the right caudothalamic notch is typical of Grade I GMH-IVH. There is no intraventricular hemorrhage or ventricular dilatation. In other cases, although unusual, larger-sized grade I GMH-IVHs may compress the foramen of Monro because of its relative close proximity to the caudothalamic notch and cause some ipsilateral ventricular obstruction. (C) Coronal view 12 weeks later shows complete resolution of the GMH-IVH.',
  },
  image2: {
    src: './appendices/appendix2.png',
    caption:
      'Image 2. Ultrasound scan in a preterm infant (GA 27 weeks) shows an uncommon location of Grade I GMH-IVH. (A) Coronal scan at the level of the frontal horns of the lateral ventricles. (B) Parasagittal scan through the left lateral ventricle. The clot (arrows) is centered posterior to the left caudothalamic notch, but is still considered a Grade I GMH-IVH as there is no blood within the ventricles. The clot is non-uniform in its echogenicity, with the echolucent portion representing cystic degeneration (liquefaction) from its early evolution. There is no intraventricular blood or ventricular dilatation. (C) Parasagittal view 9 weeks later shows further cystic degeneration and smaller clot size.',
  },
  image3: {
    src: './appendices/appendix3.png',
    caption:
      'Image 3. Grade II GMH-IVH. Ultrasound scan in a preterm infant (GA 26 weeks). (A) Coronal scan at the level of the frontal horns of the lateral ventricles shows echogenic clot involving caudate nucleus (arrow). No dilated ventricles. (B) Second coronal plane at the level of the trigone of the lateral ventricles shows a small burden of intraventricular clot layering dependently (arrowhead). (C) Parasagittal scan through the right lateral ventricle shows the same clot centered at the caudothalamic notch (arrow) and the intraventricular hemorrhage in the occipital horn separate to choroid plexus (arrowhead).',
  },
  image4: {
    src: './appendices/appendix4.png',
    caption:
      'Image 4. Grade II GMH-IVH. (A) Coronal ultrasound scan in a preterm infant (GA 27 weeks), at the level of the frontal horns of the lateral ventricles, was initially normal 2 days after birth. No GMH-IVH. (B) Repeat coronal view 6 days after birth shows echogenic clot in the left lateral ventricle (arrowhead). The AHW is < 6 mm. The frontal horns are measured at the level of the choroid plexus as it resides in the third ventricle. Normal choroid plexus occurs in the roof of the third ventricle and its extension into lateral ventricles through the foramen of Monro is visualized as a midline transverse echogenic band on coronal views (arrow). This is the correct coronal plane to measure VI and AHW. (C) Second coronal view of the frontal horns anterior to the foramen of Monro shows further echogenic intraventricular clot (arrowhead). There is no extension of choroid plexus anteriorly past the caudothalamic grooves (i.e., the frontal and occipital horns have no choroid plexus and echogenic material in these sites suggests intraventricular hemorrhage). This infant had two cUS exams in the first week of life. The cUS scan showing the greatest severity of GMH-IVH in the first week (i.e., cUS at 6 days after birth in this case) should be considered for GMH-IVH classification purposes.',
  },
  image5: {
    src: './appendices/appendix5.png',
    caption:
      'Image 5. Left Grade III GMH-IVH. Ultrasound scan in a preterm infant (GA 25 weeks), level of the bodies of the lateral ventricles, showing bilateral IVH. (A) Coronal scan 2 days after birth shows the larger left GMH-IVH (arrow) with intraventricular blood distending its lateral ventricle (AHW = 7 mm). Note also the enlarged temporal ventricular horn. A smaller right-sided grade I GMH-IVH is present with clot localized at the caudothalamic notch (arrowhead), as confirmed on parasagittal view (not shown). There is ballooning (rounding) of the right frontal ventricular horn (AHW = 6.5 mm) but it remains grade I GMH-IVH without presence of ipsilateral intraventricular clot. (B) Parasagittal view shows that the left grade III GMH-IVH fills >50% of the distended lateral ventricle. (C) Coronal FSE T2 MR image 3 months after birth shows subtle hypointense staining at the left caudothalamic notch from hemosiderin/ferritin. No porencephalic cyst. Widened subarachnoid spaces and persistent ventriculomegaly mostly reflects tissue volume loss.',
  },
  image6: {
    src: './appendices/appendix6.png',
    caption:
      'Image 6. Significant white matter echogenicity. Ultrasound scan in a preterm infant (GA 27 weeks). (A) Coronal scan at the level of the trigone of the lateral ventricles and (B) parasagittal scan showing bilateral, mildly asymmetric periventricular flaring with large echodensity in the left parietal white matter (arrows). No intraventricular hemorrhage was present. When compared to choroid plexus, the slightly brighter echodensity of the parietal lesion is consistent with significant white matter injury in the absence of IVH. (C) Coronal view 9 weeks later shows a small group of cystic lesions has developed in the ischemic injured parietal white matter.',
  },
  image7: {
    src: './appendices/appendix7.png',
    caption:
      'Image 7. Grade III + PVHI. Ultrasound scan in a preterm infant (GA 24 weeks) with bilateral IVH and left-sided periventricular hemorrhagic infarction. (A) Coronal scan 2 days after birth showing the intraventricular hemorrhages (arrowheads) and a large echodensity in the left frontoparietal white matter (arrow). (B) Parasagittal scan showing the echodensity (arrows) extending from the posterior frontal white matter to the parietal white matter. (C) Coronal follow-up scan 2 weeks after birth shows the area of PVHI beginning to show central echolucency indicating early cystic degeneration. (D) Coronal follow-up scan 7 weeks after birth shows further cystic degeneration post-PVHI with echogenic clot debris. Dilated lateral ventricles and echogenic ependymal lining. (E,F) Coronal and parasagittal follow-up scans at 12 weeks shows the large porencephalic cyst communicating with the lateral ventricle. Internal clot debris has cleared and ependyma is no longer echogenic. The persisting ventriculomegaly is now partially passive (i.e., ex-vacuo) in origin.',
  },
};
