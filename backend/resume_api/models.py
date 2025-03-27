from django.db import models
from django.contrib.auth.models import User

class Resume(models.Model):
    """Model to store user's resume information"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="resumes")
    title = models.CharField(max_length=100)
    file_name = models.CharField(max_length=255)
    content = models.TextField()
    file_type = models.CharField(max_length=10)  # pdf, docx, etc.
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.title} - {self.user.username}"

class JobDescription(models.Model):
    """Model to store job descriptions for analysis"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="job_descriptions")
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100, blank=True, null=True)
    file_name = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    file_type = models.CharField(max_length=10, blank=True, null=True)  # pdf, docx, txt, etc.
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title} - {self.company or 'Unknown'}"

class ResumeAnalysis(models.Model):
    """Model to store the results of resume analysis"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="analyses")
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name="analyses")
    job_description = models.ForeignKey(JobDescription, on_delete=models.CASCADE, related_name="analyses")
    keywords_to_add = models.JSONField(default=list)
    keywords_to_remove = models.JSONField(default=list)
    format_suggestions = models.JSONField(default=list)
    content_suggestions = models.JSONField(default=list)
    match_score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Resume Analyses"
    
    def __str__(self):
        return f"Analysis for {self.resume.title} - {self.job_description.title}"

class ChatMessage(models.Model):
    """Model to store chat messages for the interview preparation chatbot"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_messages")
    message = models.TextField()
    is_user = models.BooleanField(default=True)  # True if message is from user, False if from bot
    timestamp = models.DateTimeField(auto_now_add=True)
    session_id = models.CharField(max_length=100)  # To group messages in a conversation
    
    class Meta:
        ordering = ['timestamp']
    
    def __str__(self):
        return f"{'User' if self.is_user else 'Bot'}: {self.message[:50]}..."
