export default id => `
{
  place(id: "${id}") {
    displayed_what
    displayed_where
    place_feedback_summary {
      positive_recommendation_percentage
    }
    addresses {
      where {
        geography {
          location {
            latlon
          } 
        }
      }
    }
    opening_hours {
      days {
        monday {
          start
          end
          type
        }
        tuesday {
          start
          end
          type
        }
        wednesday {
          start
          end
          type
        }
        thursday {
          start
          end
          type
        }
        friday {
          start
          end
          type
        }
        saturday {
          start
          end
          type
        }
        sunday {
          start
          end
          type
        }
      }
    }
  }
}
`
