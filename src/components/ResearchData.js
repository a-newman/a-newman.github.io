const data = {
  sections: [
    {
      name: "Publications",
      items: [
        {
          title: "Multimodal Memorability: Modeling Effects of Semantics and Decay on Video Memorability",
          pubKey: "memento",
          authors: [
            "Anelise Newman*",
            "Camilo Fosco*",
            "Vincent Casser",
            "Barry McNamara",
            "Allen Lee",
            "Aude Oliva"
          ],
          venue: "ECCV 2020",
          imageSrc: "images/memento_predictions.png",
          imageAlt: "Memorability decay predictions from our model, SemanticMemNet",
          abstract: "A key capability of an intelligent system is deciding when events from past experience must be remembered and when they can be forgotten. Towards this goal, we develop a predictive model of human visual event memory and how those memories decay over time. We introduce Memento10k, a new, dynamic video memorability dataset containing human annotations at different viewing delays. Based on our findings we propose a new mathematical formulation of memorability decay, resulting in a model that is able to produce the first quantitative estimation of how a video decays in memory over time. In contrast with previous work, our model can predict the probability that a video will be remembered at an arbitrary delay. Importantly, our approach is multimodal, combining visual and semantic information to fully represent the meaning of events. Our experiments on two video memorability benchmarks, including Memento10k, show that our model significantly improves upon the best prior approach (by 12% on average).",
          links: [
            {
              name: "Project Website",
              iconName: "IoIosDesktop",
              href: "http://memento.csail.mit.edu/"
            },
            {
              name: "Paper",
              iconName: "IoIosPaper",
              href: "documents/Memento_ECCV_2020.pdf"
            }
          ]
        },
        {
          title: "How much time do you have? Modeling Multi-duration Saliency",
          pubKey: "multiduration",
          authors: [
            "Camilo Fosco*",
            "Anelise Newman*",
            "Pat Sukhum",
            "Yun Bin Zhang",
            "Nanxuan Zhao",
            "Aude Oliva",
            "Zoya Bylinskii"
          ],
          venue: "CVPR 2020",
          imageSrc: "images/multiduration_predictions.png",
          imageAlt: "Multi-duration saliency predictions from our model, MD-SEM.",
          abstract: "What jumps out in a single glance of an image is different than what you might notice after closer inspection. Yet conventional models of visual saliency produce predictions at an arbitrary, fixed viewing duration, offering a limited view of the rich interactions between image content and gaze location. In this paper we propose to capture gaze as a series of snapshots, by generating population-level saliency heatmaps for multiple viewing durations. We collect the CodeCharts1K dataset, which contains multiple distinct heatmaps per image corresponding to 0.5, 3, and 5 seconds of free-viewing. We develop an LSTM-based model of saliency that simultaneously trains on data from multiple viewing durations. Our Multi-Duration Saliency Excited Model (MD-SEM) achieves competitive performance on the LSUN 2017 Challenge with 57% fewer parameters than comparable architectures. It is the first model that produces heatmaps at multiple viewing durations, enabling applications where multi-duration saliency can be used to prioritize visual content to keep, transmit, and render.",
          links: [
            {
              name: "Project Website",
              iconName: "IoIosDesktop",
              href: "http://multiduration-saliency.csail.mit.edu/"
            },
            {
              name: "Paper",
              iconName: "IoIosPaper",
              href: "documents/MultidurationSaliency_CVPR_2020.pdf"
            }
          ]
        },
        {
          title: "TurkEyes: A Web-Based Toolbox for Crowdsourcing Attention Data",
          pubKey: "turkeyes",
          authors: [
            "Anelise Newman",
            "Barry McNamara",
            "Camilo Fosco",
            "Yun Bin Zhang",
            "Pat Sukhum",
            "Matthew Tancik",
            "Nam Wook Kim",
            "Zoya Bylinskii"
          ],
          venue: "CHI 2020",
          links: [
            {
              name: "Project Website",
              iconName: "IoIosDesktop",
              href: "http://turkeyes.mit.edu/"
            },
            {
              name: "Paper",
              iconName: "IoIosPaper",
              href: "documents/TurkEyes.pdf"
            }
          ],
          videoSrc: "images/turkeyes_teaser_video.mp4",
          videoAlt: "Video teaser explaining the 4 TurkEyes interfaces",
          abstract: "Eye movements provide insight into what parts of an image a viewer finds most salient, interesting, or relevant to the task at hand. Unfortunately, eye tracking data, a commonly-used proxy for attention, is cumbersome to collect. Here we explore an alternative: a comprehensive web-based toolbox for crowdsourcing visual attention. We draw from four main classes of attention-capturing methodologies in the literature. ZoomMaps is a novel <i>zoom-based</i> interface that captures viewing on a mobile phone. CodeCharts is a <i>self-reporting</i> methodology that records points of interest at precise viewing durations. ImportAnnots is an <i>annotation</i> tool for selecting important image regions, and <i>cursor-based</i> BubbleView lets viewers click to deblur a small area. We compare these methodologies using a common analysis framework in order to develop appropriate use cases for each interface. This toolbox and our analyses provide a blueprint for how to gather attention data at scale without an eye tracker."
        }
      ]
    },
    {
      name: "Presentations/Talks",
      items: [
        {
          title: "Multimodal Memorability: Modeling Effects of Semantics and Decay on Video Memorability",
          pubKey: "memento_eccv_presentation",
          venue: "ECCV 2020 virtual presentation. 08/2020.",
          ytVideo: "https://www.youtube.com/watch?v=Ot4mHHcLxV8",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/memento_eccv_presentation_slides.pdf"
            },
            {
              name: "Teaser Video (YouTube)",
              iconName: "IoIosPlayCircle",
              href: "https://www.youtube.com/watch?v=63R6k1m4tnQ"
            }
          ]
        },
        {
          title: "How much time do you have? Modeling Multi-duration Saliency",
          pubKey: "multiduration_cvpr_presentation",
          venue: "CVPR 2020 virtual presentation. 06/2020.",
          ytVideo: "https://www.youtube.com/watch?v=gizPQDOztBs",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/multiduration_saliency_cvpr_video_pres_slides.pdf"
            },
            {
              name: "Poster",
              iconName: "IoMdEasel",
              href: "documents/multiduration_saliency_cvpr_poster.pdf"
            }
          ]
        },
        {
          title: "Introducing the TurkEyes Toolbox: UIs for crowdsourcing attention without an eye tracker",
          pubKey: "turkeyes_vss_presentation",
          venue: "<a href=\"https://www.visionsciences.org/\">VSS 2020</a> virtual poster presentation. 05/2020'",
          ytVideo: "https://www.youtube.com/watch?v=Na7wWyJkKBQ",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/TurkEyes_vss_slides.pdf"
            },
            {
              name: "Poster",
              iconName: "IoMdEasel",
              href: "documents/TurkEyes_vss_poster.pdf"
            }
          ]
        },
        {
          title: "TurkEyes: A Web-Based Toolbox for Crowdsourcing Attention Data",
          pubKey: "turkeyes_chi_presentation",
          venue: "CHI 2020 virtual video presentation. 04/2020.",
          ytVideo: "https://www.youtube.com/watch?v=NZjjn-u1X90",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/TurkEyes_chi_presentation_slides.pdf"
            }
          ]
        },
        {
          title: "Memento: Modeling Video Memorability",
          pubKey: "memento_mic_presentation",
          venue: "<a href=\"https://machineintelligence.cc/\">Machine Intelligence Conference 2019</a>, Boston. 09/2020'",
          videoSrc: "documents/memento_talk_recording_downsampled.mp4",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/memento_mic_presentation.pdf"
            }
          ]
        },
        {
          title: "ZoomMaps: A Zoomable Crowdsourced Interface for Exploring Attention on Large-scale Visualizations",
          pubKey: "zoommaps_visxvision_presentation",
          venue: "Talk at <a href=\"https://visxvision.com/\">VisXVision Workshop at VSS 2019</a>. 05/2019'",
          imageSrc: "images/zoommaps_visxvision_image.png",
          imageAlt: "Visualizations we studied for our ZoomMaps visualization study",
          links: [
            {
              name: "Slides (PDF)",
              iconName: "IoIosPhotos",
              href: "documents/zoommaps_visxvision_presentation.pdf"
            }
          ]
        },
        {
          title: "ZoomMaps: Using Zoom to Capture Areas of Interest on Images",
          pubKey: "zoommaps_vss_poster",
          venue: "<a href=\"https://www.visionsciences.org/\">VSS 2019</a> poster presentation. 05/2019",
          imageSrc: "images/zoommaps_vss_poster.png",
          imageAlt: "ZoomMaps VSS poster",
          links: [
            {
              name: "Poster",
              iconName: "IoMdEasel",
              href: "documents/zoommaps_vss_poster.pdf"
            },
            {
              name: "Abstract",
              iconName: "IoMdListBox",
              href: "https://jov.arvojournals.org/article.aspx?articleid=2750508"
            }
          ]
        },
        {
          title: "Effects of title wording on memory of trends in line graphs",
          pubKey: "titles_vss_poster",
          venue: "<a href=\"https://www.visionsciences.org/\">VSS 2018</a> poster presentation. 05/2018",
          imageSrc: "images/titles_vss_poster_2018.png",
          imageAlt: "Titles VSS poster",
          links: [
            {
              name: "Poster",
              iconName: "IoMdEasel",
              href: "documents/titles_vss_poster_2018.pdf"
            },
            {
              name: "Abstract",
              iconName: "IoMdListBox",
              href: "https://jov.arvojournals.org/article.aspx?articleid=2699826"
            }
          ]
        }
      ]
    }
  ]
};

export default data;
