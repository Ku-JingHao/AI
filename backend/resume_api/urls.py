from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'resumes', views.ResumeViewSet, basename='resume')
router.register(r'job-descriptions', views.JobDescriptionViewSet, basename='jobdescription')
router.register(r'analyses', views.ResumeAnalysisViewSet, basename='resumeanalysis')

# The API URLs are determined automatically by the router
urlpatterns = [
    path('', include(router.urls)),
    path('analyze/', views.analyze_resume, name='analyze-resume'),
    path('test-sentiment/', views.test_sentiment_analysis, name='test_sentiment_analysis'),
    
    # Interview preparation chatbot URLs
    path('interview/chat/', views.interview_chat, name='interview-chat'),
    path('interview/history/', views.get_chat_history, name='chat-history'),
    path('interview/sessions/', views.get_chat_sessions, name='chat-sessions'),
    path('interview/faq-topics/', views.get_faq_topics, name='faq-topics'),
] 