import {
    DateTimeWidget,
    DateTimeReviewWidget,
    LocationPickerWidget,
    LocationReviewWidget
  } from "@cityofaustin/usfs-components";


  const whatHappenedThanksChapter = {
    title: "Tell us what happened",
    pages: {
      whatHappened: {
        path: "what-happened",
        title: "Tell us what happened",
        schema: {
          type: "object",
          required: ["description"],
          properties: {
            description: {
              type: "string"
            },
            datetime: {
              type: "string"
            }
          }
        },
        uiSchema: {
          "ui:title": "Tell us what happened",
          description: {
            "ui:title": "Describe your experience with the Austin Police Department.",
            "ui:widget": "textarea"
          },
          datetime: {
            "ui:title": "When did it happen?",
            "ui:widget": DateTimeWidget,
            "ui:reviewWidget": DateTimeReviewWidget,
            "ui:options": {
              hideOnReviewIfFalse: true
            }
          }
        }
      }
    }
  };

  export default whatHappenedThanksChapter;
