from rest_framework import serializers
from .models import Stadium, Section, Row, Seat

class StadiumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stadium
        fields = ['id', 'name', 'location']

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'name', 'description', 'stadium']

class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Row
        fields = ['id', 'row_number', 'section']

class SeatSerializer(serializers.ModelSerializer):
    section_name = serializers.CharField(source='row.section.name', read_only=True)
    rownumber = serializers.CharField(source='row.row_number', read_only=True)

    class Meta:
        model = Seat
        fields = ['id', 'seat_number', 'row', 'rownumber', 'is_available', 'section_name']

