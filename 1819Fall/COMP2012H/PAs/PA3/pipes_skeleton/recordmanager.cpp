#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QTextStream>
#include <QStandardPaths>

#include "recordmanager.h"

const QString RecordManager::record_dir =
    QStandardPaths::writableLocation(QStandardPaths::DataLocation) + "/comp2012h_pipes";
const QString RecordManager::record_path =
    QStandardPaths::writableLocation(QStandardPaths::DataLocation) + "/comp2012h_pipes/record.txt";

RecordManager::RecordManager()
    :records {}
{
    QDir dir(record_dir);
    dir.mkpath(".");
    if (!QFileInfo::exists(record_path)) {
        QFile file(record_path);
        if (file.open(QIODevice::ReadWrite)) {
            QTextStream stream(&file);
            stream << "-1\n-1\n-1" << endl;
            file.close();
        }
    }

    QFile file(record_path);
    file.open(QIODevice::ReadOnly);

    QTextStream in(&file);

    for (int i = 1; !in.atEnd(); ++i) {
        QString line = in.readLine();    
        records[i] = line.toInt();
    }

    file.close();
}

int RecordManager::get_record(int level)
{
    return records[level];
}

int RecordManager::get_num_of_levels()
{
    return NUM_OF_LEVELS;
}

void RecordManager::update_record(int level, int value)
{
    records[level] = value;
    QFile file(record_path);
    if (file.open(QIODevice::WriteOnly)) {
        QTextStream stream(&file);
        for (int i = 1; i <= NUM_OF_LEVELS; ++i)
            stream << records[i] << endl;
        file.close();
    }
}
