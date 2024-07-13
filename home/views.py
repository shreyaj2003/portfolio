from django.shortcuts import render, HttpResponse
from home.models import Contact
from django.contrib import messages

# Create your views here.
def home(request):
    if request.method=='POST':
        Name=request.POST.get("Name")
        Email=request.POST.get("Email")
        Message=request.POST.get("Message")
        contact=Contact(Name=Name,Email=Email,Message=Message)
        contact.save()
        messages.success(request, "Your Message has been sent.")
    return render(request,'index.html')