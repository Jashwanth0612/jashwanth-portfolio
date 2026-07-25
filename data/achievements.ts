export type Achievement = {
  slug: string;
  numeral: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  whatIDid: string[];
  howIDidIt: string[];
  results: string[];
};

export const achievements: Achievement[] = [
  {
    slug: "adaptive-query-masking",
    numeral: "I",
    title: "Adaptive Query Masking (AQM)",
    tagline: "Filed Patent · 202541107381",
    summary:
      "A custom module for RT-DETRv2 that adaptively masks detection queries, sharpening the model's focus under degraded visibility conditions.",
    tags: ["Object Detection", "Filed Patent", "DRDO Research"],
    whatIDid: [
      "Designed and implemented a query-masking mechanism layered onto RT-DETRv2's decoder to suppress low-confidence, noise-driven queries under poor visibility.",
      "Filed this as a standalone patent (202541107381) as part of the DRDO all-weather detection research.",
      "Integrated AQM into the full detection pipeline at inference time alongside the SOS module and the NAFNet restoration front-end.",
    ],
    howIDidIt: [
      "Analyzed RT-DETRv2's query behavior under fog, rain, and low-light conditions to identify where irrelevant queries were consuming the model's attention budget.",
      "Built an adaptive masking layer that down-weights queries unlikely to correspond to real objects, based on learned confidence signals rather than a fixed threshold.",
      "Applied AQM at inference only, after running into a box-assertion error during training-time integration — a deliberate engineering trade-off to keep the pipeline stable while still capturing the accuracy gain.",
      "Validated the module as part of a four-stage ablation study (Baseline, +AQM, +SOS, Full Model) to isolate its individual contribution.",
    ],
    results: [
      "Contributed to a system-wide mAP@0.5 of approximately 0.97 and mAP@0.5:0.95 of approximately 0.84 on a custom 3-class vehicle dataset.",
      "Documented in the IEEE-format paper ClearSight-DETR, currently under review.",
    ],
  },
  {
    slug: "small-object-aware-scoring",
    numeral: "II",
    title: "Small Object-Aware Scoring (SOS)",
    tagline: "Filed Patent · 202541107384",
    summary:
      "A scoring mechanism built to rescue small, distant, or partially occluded objects from being suppressed during detection — a known weakness in transformer-based detectors.",
    tags: ["Object Detection", "Filed Patent", "DRDO Research"],
    whatIDid: [
      "Identified that RT-DETRv2, like most transformer detectors, systematically under-scores small and distant objects relative to larger ones.",
      "Designed a scoring adjustment that re-weights detection confidence based on object scale, giving small objects a fairer chance of surviving non-maximum suppression.",
      "Filed this as a standalone patent (202541107384).",
    ],
    howIDidIt: [
      "Studied confidence score distributions across object sizes in the custom vehicle dataset to quantify the small-object penalty.",
      "Built a scale-aware scoring adjustment integrated into the detection head, tuned so it improves small-object recall without inflating false positives on large objects.",
      "Tested SOS both independently and combined with AQM in a structured ablation study across four experimental configurations.",
    ],
    results: [
      "Measurable recall improvement on small/distant vehicle instances in the custom dataset.",
      "Combined with AQM and the NAFNet front-end, contributed to the full model's mAP@[0.5:0.95] of 86.6%, AP@0.50 of 97.8%, and AR@100 of 89.5% as reported in ClearSight-DETR.",
    ],
  },
  {
    slug: "clearsight-detr",
    numeral: "III",
    title: "ClearSight-DETR",
    tagline: "IEEE-Format Paper · Under Review",
    summary:
      "The full research paper documenting AQM, SOS, and a lightweight AQM-lite variant, benchmarked on a UA-DETRAC-derived dataset.",
    tags: ["Published Research", "IEEE Format"],
    whatIDid: [
      "Wrote the complete paper in LaTeX/Overleaf, covering system design, the AQM and SOS modules, and a lightweight AQM-lite variant (CLAHE + gamma correction) for compute-constrained settings.",
      "Ran and documented the full ablation study and benchmark results.",
    ],
    howIDidIt: [
      "Structured the paper around a UA-DETRAC-derived dataset, reporting mAP@[0.5:0.95], AP@0.50, and AR@100 across the baseline and each added module.",
      "Built AQM-lite as a cheaper alternative to full AQM for scenarios where CLAHE and gamma correction alone provide enough of the visibility gain.",
      "Iterated through review-driven revisions to tighten the methodology and results sections.",
    ],
    results: [
      "Reported metrics: mAP@[0.5:0.95] = 86.6%, AP@0.50 = 97.8%, AR@100 = 89.5%.",
      "Currently under review.",
    ],
  },
  {
    slug: "nafnet-pipeline",
    numeral: "IV",
    title: "NAFNet All-Weather Restoration Pipeline",
    tagline: "Ensemble System · CUDA-Optimized",
    summary:
      "A NAFNet + RT-DETRv2 + YOLOv11n ensemble that restores image clarity across five weather conditions before detection runs, in roughly 7–9 seconds end-to-end on CUDA.",
    tags: ["Image Restoration", "Ensemble Models", "DRDO Research"],
    whatIDid: [
      "Built the full end-to-end inference pipeline chaining a NAFNet restoration stage into the RT-DETRv2 + YOLOv11n detection ensemble.",
      "Trained NAFNet separately across five distinct weather/degradation conditions rather than relying on a single general-purpose restoration model.",
    ],
    howIDidIt: [
      "Trained NAFNet on fog (RESIDE), rain (Rain13K), snow (Snow100K), and low-light (LOL) datasets to specialize restoration quality per condition.",
      "Chained the restored output directly into the detection ensemble so degraded frames are cleaned up before RT-DETRv2/YOLOv11n ever sees them.",
      "Optimized the full pipeline to run end-to-end in roughly 7–9 seconds per input on CUDA.",
    ],
    results: [
      "Best NAFNet restoration quality: 34.62 dB PSNR on rain, 33.71 dB PSNR on fog (ITS).",
      "Feeds directly into the detection pipeline that achieves mAP@0.5 ≈ 0.97 on the custom vehicle dataset.",
    ],
  },
];

export function getAchievement(slug: string) {
  return achievements.find((a) => a.slug === slug);
}
