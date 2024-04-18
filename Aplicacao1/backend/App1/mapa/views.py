from django.shortcuts import render
from rest_framework import viewsets
from .models import Stadium, Section, Row, Seat
from .serializers import StadiumSerializer, SectionSerializer, RowSerializer, SeatSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class StadiumViewSet(viewsets.ModelViewSet):
    queryset = Stadium.objects.all()
    serializer_class = StadiumSerializer

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class RowViewSet(viewsets.ModelViewSet):
    queryset = Row.objects.all()
    serializer_class = RowSerializer

@method_decorator(csrf_exempt, name='dispatch')
class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer

    @action(detail=True, methods=['patch'])
    def reserve(self, request, pk=None):
        seat = self.get_object()
        seat.is_available = False
        seat.save()
        return Response(status=status.HTTP_200_OK)

