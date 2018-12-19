import {
  DateTimeWidget,
  DateTimeReviewWidget,
  LocationPickerWidget,
  LocationReviewWidget
} from "@cityofaustin/usfs-components";

const whatHappenedChapter = {
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
          },
          location: {
            type: "string"
          }
        }
      },
      uiSchema: {
        "ui:title": "Tell us what happened",
        description: {
          "ui:title": "Description",
          "ui:description":
            "Please provide a detailed description of your experience with the Austin Police Department",
          "ui:widget": "textarea"
        },
        datetime: {
          "ui:title": "Date and time, if known",
          "ui:widget": DateTimeWidget,
          "ui:reviewWidget": DateTimeReviewWidget,
          "ui:options": {
            hideOnReviewIfFalse: true
          }
        },
        location: {
          "ui:title": "Location, if known",
          "ui:widget": LocationPickerWidget,
          "ui:reviewWidget": LocationReviewWidget,
          "ui:options": {
            hideOnReviewIfFalse: true
          }
        }
      }
    }
  }
};

export default whatHappenedChapter;
