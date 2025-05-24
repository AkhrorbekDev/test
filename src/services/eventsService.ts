import { api } from '@/services/api'


export const createEventsService = () => {
  return {

    getEvents: (query) => api('/events/all', {
      method: 'GET',
      params: query
    }),
    getEventById: (eventId: string) => api(`/events/${eventId}`),
    createEvent: (data: any) => api('/events/', {
      method: 'POST',
      body: data
    }),
    updateEvent: (eventId: string, data: any) => api(`/events/${eventId}`, {
      method: 'PUT',
      body: data
    }),
    deleteEvent: (eventId: string) => api(`/events/${eventId}`, {
      method: 'DELETE'
    }),

    applyForEvent: (eventId: string, data: any) => api(`/events/${eventId}/apply`, {
      method: 'POST',
      body: data
    }),

    cancelFromEvent: (eventId: string) => api(`/events/${eventId}/reject`, {
      method: 'POST'
    }),

    sendReport : (eventId: string, data: any) => api(`/events/${eventId}/send-report`, {
      method: 'POST',
      body: data
    }),

    closeApplication: (eventId: string) => api(`/events/${eventId}/close-registration`, {
      method: 'POST'
    }),

    openApplication: (eventId: string) => api(`/events/${eventId}/open-registration`, {
      method: 'POST'
    }),

    cancelEvent: (eventId: string) => api(`/events/${eventId}/cancel`, {
      method: 'POST'
    })


    // sendApplication: (eventId: string, data: any) => api(`/events/${eventId}/send-application`, {
    //   method: 'POST',
    //   body: data
    // })

  }
}
